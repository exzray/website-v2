import {Component, Input, OnInit} from '@angular/core';
import {Message, MessageButton} from './shared/classes/message';
import {DialogFlowService} from './shared/services/dialog-flow.service';

@Component({
  selector: 'app-chatbot-item',
  templateUrl: './chatbot-item.component.html',
  styleUrls: ['./chatbot-item.component.css']
})
export class ChatbotItemComponent implements OnInit {

  @Input() message: Message;

  public isHuman: boolean;

  constructor(private dialogflow: DialogFlowService) {

  }

  ngOnInit(): void {
    this.isHuman = (this.message.sender === 'human');
  }

  onClickReply(button: MessageButton) {
    this.dialogflow.userMessage(button.reply);

    if (button.openUrl) {
      window.open(button.openUrl, '_blank');
    }
  }

}
