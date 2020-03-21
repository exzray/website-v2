import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Message} from '../classes/message';
import {scan} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DialogFlowService {

  private readonly messages: BehaviorSubject<Message[]>;
  private readonly isWaiting: BehaviorSubject<boolean>;

  constructor(private client: HttpClient) {
    this.messages = new BehaviorSubject<Message[]>([]);
    this.messages.subscribe(value => console.log(value));
  }

  public userMessage(text: string) {
    const message: Message = new Message();
    message.text = text;
    message.sender = 'human';

    this.messages.next([message]);
  }

  public botMessage(text: string) {
    const message: Message = new Message();
    message.text = text;
    message.sender = 'human';

    this.messages.next([message]);
  }

  public getObservableMessages(): Observable<Message[]> {
    return this.messages
      .asObservable()
      .pipe(scan((acc, value) => acc.concat(value)));
  }
}
