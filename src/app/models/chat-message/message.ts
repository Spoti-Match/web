export class Message {

  recipientId: string;

  content: string;

  constructor(recipientId: string,
     content: string){
      this.recipientId = recipientId
      this.content = content
    }
}
