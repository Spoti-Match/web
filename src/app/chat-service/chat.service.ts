import { Injectable } from '@angular/core';
import { tokenGetter } from '../app.module';
import { RxStompService } from '../rxStomp/rx-stomp.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService{

  constructor(private rxStompService: RxStompService){

  }

  receiveMessage(pairId: number){
    return this.rxStompService.watch("/user/" + pairId + "/queue/messages")
  }

  sendMessage(message: any){
    let headers = {
      Authorization: 'Bearer ' + tokenGetter()
    }
    this.rxStompService.publish({ destination: '/app/chat',headers: headers, body: JSON.stringify(message)});
  }


}
