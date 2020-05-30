import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from './shared/classes/message';
import {DialogFlowService} from './shared/services/dialog-flow.service';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  public message: string;
  public messages: Observable<Message[]>;
  public typing: Observable<boolean>;

  constructor(private dialogflow: DialogFlowService, private storage: AngularFireStorage) {
    this.message = '';
    this.messages = dialogflow.getMessages();
    this.typing = dialogflow.getIsWaiting();
  }

  ngOnInit(): void {
    this.dialogflow.sendMessageQuery('menu');
  }

  public sendMessage() {
    this.dialogflow.userMessage(this.message);
    this.message = '';
  }

  public openUpload(input: HTMLInputElement) {
    input.click();
  }

  public changeUpload(files: FileList) {
    if (files.length === 1) {
      const file: File = files.item(0);
      this.uploadFile(file);

    } else {
      window.alert('Multiple file uploaded is not allow!');
    }
  }

  public sendMessageMenu() {
    this.dialogflow.userMessage('menu');
  }

  private uploadFile(file: File) {
    const path = 'enquire_image/' + this.dialogflow.getSessionID();

    const ref = this.storage.ref(path);

    const task = this.storage.upload(path, file);
    task.snapshotChanges().toPromise().finally(async () => {
      this.message = await ref.getDownloadURL().toPromise();
      console.log(this.message);
    });
  }
}
