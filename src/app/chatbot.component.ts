import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from './shared/classes/message';
import {DialogFlowService} from './shared/services/dialog-flow.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  public messages: Observable<Message[]>;
  public typing: Observable<boolean>;

  constructor(private dialogflow: DialogFlowService) {
    this.messages = dialogflow.getMessages();
    this.typing = dialogflow.getIsWaiting();
  }

  ngOnInit(): void {
    this.dialogflow.botMessage('Hey, human! What i can help you?');
  }

  public sendMessage(input: HTMLInputElement) {
    // must not empty text
    if (input.value) {
      this.dialogflow.userMessage(input.value);
    }

    input.value = '';
  }

  public sendMessageMenu() {
    this.dialogflow.userMessage('menu');
  }
}
