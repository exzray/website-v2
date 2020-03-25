export class Message {
  public text: string;
  public sender = 'bot';
  public created = new Date();
  public buttons: MessageButton[];
}

export class MessageButton {
  public label: string;
  public reply: string;
  public image: string;
  public openUrl: string;
}
