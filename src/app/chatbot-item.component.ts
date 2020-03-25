import {Component, Input, OnInit} from '@angular/core';
import {Message} from './shared/classes/message';

@Component({
  selector: 'app-chatbot-item',
  templateUrl: './chatbot-item.component.html',
  styleUrls: ['./chatbot-item.component.css']
})
export class ChatbotItemComponent implements OnInit {

  @Input() message: Message;

  public isHuman: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.isHuman = (this.message.sender === 'human');
  }

}
