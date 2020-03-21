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

  public text: string;
  public typing: boolean;

  constructor(private dialogflow: DialogFlowService) {
    this.messages = dialogflow.getObservableMessages();

    this.text = '';
    this.typing = false;
  }

  ngOnInit(): void {
  }

  public sendMessage() {
    // must not empty text
    if (this.text) {
      this.dialogflow.userMessage(this.text);
    }

    this.text = '';
  }
}
