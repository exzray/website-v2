import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {scan} from 'rxjs/operators';

import {ApiAiClient, IServerResponse} from 'api-ai-javascript/es6/ApiAiClient';
import {v4 as uuidv4} from 'uuid';

import {Message} from '../classes/message';
import {environment} from '../../../environments/environment';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DialogFlowService {

  private enquireCol: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) {
    this.messages = new BehaviorSubject<Message[]>([]);
    this.isWaiting = new BehaviorSubject<boolean>(false);

    // check previous session id save in localStorage
    this.sessionID = localStorage.getItem('dialog_flow_session_id');

    // dialog flow require session id to keep session alive
    if (!this.sessionID) {

      this.sessionID = uuidv4();
      console.log(`create new session id: ${this.sessionID}`);

      // save created uuid to locaStorage
      localStorage.setItem('dialog_flow_session_id', this.sessionID);

    } else {
      console.log(`start session with id: ${this.sessionID}`);
    }

    this.client = new ApiAiClient({accessToken: this.dialogFlowToken, sessionId: this.sessionID});
  }

  private readonly dialogFlowToken = environment.dialogFlow;
  private readonly client;

  private readonly messages: BehaviorSubject<Message[]>;
  private readonly isWaiting: BehaviorSubject<boolean>;

  private readonly sessionID: string;

  public sendMessageQuery(text: string) {
    // simulate bot typing
    this.isWaiting.next(true);

    this.handleQueryResponse(this.client.textRequest(text));
  }

  public userMessage(text: string) {
    const message: Message = new Message();
    message.text = text;
    message.sender = 'human';

    this.messages.next([message]);

    this.sendMessageQuery(text);
  }

  public botMessage(text: string) {
    const message: Message = new Message();
    message.text = text;

    this.messages.next([message]);
  }

  public getMessages(): Observable<Message[]> {
    return this.messages
      .asObservable()
      .pipe(scan((acc, value) => acc.concat(value)));
  }

  public getIsWaiting(): Observable<boolean> {
    return this.isWaiting.asObservable();
  }

  private handleQueryResponse(promise: Promise<IServerResponse>) {
    promise
      .then(response => {
        this.handleAction(response);

        const messages: any[] = response.result.fulfillment.messages;

        messages.forEach(value => {
          const speech: string = value.speech;

          if (!speech) {
            this.handleFirebaseError(response.result.resolvedQuery);
          } else {
            if (speech.startsWith('payload:')) {
              const jsonString: string = speech.substr(speech.indexOf(':') + 1);
              const message: Message = JSON.parse(jsonString);
              message.created = new Date();
              this.messages.next([message]);

            } else {
              this.botMessage(speech);
            }

            this.isWaiting.next(false);
            this.playSound();
          }
        });
      })
      .catch(reason => {
        console.log(reason);
        this.isWaiting.next(false);
      });
  }

  private handleFirebaseError(query: string) {
    this.sendMessageQuery(query);
  }

  private playSound() {
    const audio = new Audio('../../../assets/sound/notification.mp3');
    audio.load();
    audio.play().finally(() => console.log('play sound'));
  }

  private handleAction(response: any) {
    const actionName: string = response.result.action;

    switch (actionName) {
      case 'action_check_enquire':
        this.actionCheckEnquire();
        break;
      case 'action_link_account':
        break;
    }
  }

  private actionCheckEnquire() {
    this.enquireCol = this.firestore.collection(`enquires`, ref => ref.where('sessionID', '==', this.sessionID));
    this.enquireCol.get().subscribe(snapshot =>
      snapshot.docs.forEach(value => console.log(value)))
    ;
  }
}
