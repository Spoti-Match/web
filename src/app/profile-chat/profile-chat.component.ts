import {Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {VERSION} from "@angular/forms";
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ChatService } from '../chat-service/chat.service';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { Pair } from '../models/pair/pair';
import { UserService } from '../user-service/user.service';
import { Message } from '@stomp/stompjs'
import { UserDetails } from '../models/userDetails/userDetails';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProfileChatComponent implements OnInit {

  pairs: Pair[];
  receivedMessages: any[] = [];
  pairSubscriptions: Subscription[] =[]
  subscriptions: Subscription[] =[]
  userDetails: any;
  currentRecipientId: number;



  constructor(private userService: UserService,private chatService: ChatService, private changeDetection: ChangeDetectorRef){

  }

  chatInput: string ="";

  ngOnInit(){
    this.getPairs();
    this.pairSubscriptions.push(this.userService.getMyDetails().subscribe(
      (data) => {
        this.userDetails = data;
      }
    ));
  }

  getPairs(){
    this.subscriptions.push(this.userService.getPairs().subscribe(
      (data)=>{
        let tempData = JSON.stringify(data)
        this.pairs = JSON.parse(tempData)
        console.log(this.pairs)
      }
    ))
  }

  loadChat(pair: Pair){

    this.subscriptions.forEach((item) =>{
      item.unsubscribe();
    })

    this.subscriptions = []

    if(pair.leftUserId != this.userDetails.id){
      this.currentRecipientId = pair.leftUserId;
    }
    else{
      this.currentRecipientId = pair.rightUserId;
    }

    this.subscriptions.push(this.userService.getPreviousMessages(this.currentRecipientId).subscribe(
      (data: any) => {
        let tempData = JSON.stringify(data)
        this.receivedMessages = JSON.parse(tempData)
        console.log(this.receivedMessages)
        this.changeDetection.detectChanges()
      }
    ));

    this.subscriptions.push(this.chatService.receiveMessage(this.currentRecipientId).subscribe(
        (message: Message) => {
          console.log(JSON.parse(message.body).content)
          this.receivedMessages.push(JSON.parse(message.body))
          this.changeDetection.detectChanges()
        })
      );

      this.subscriptions.push(this.chatService.receiveMessage(this.userDetails.id).subscribe(
        (message: Message) => {
          console.log(JSON.parse(message.body).content)
          this.receivedMessages.push(JSON.parse(message.body))
          this.changeDetection.detectChanges()
        })
      );

  }

  send(content: string) {

    let message = {
        recipientId: this.currentRecipientId,
        content: content
    }

    console.log(message)
    this.chatService.sendMessage(message)
    this.chatInput = ""
    this.changeDetection.detectChanges()
  }

  testButton(){
    console.log(this.pairs)
    console.log(this.userDetails)
    console.log(this.currentRecipientId)
    console.log(this.receivedMessages)
    this.changeDetection.detectChanges()
  }


  ngOnDestroy(){
      this.pairSubscriptions.forEach((item) =>{
        item.unsubscribe();
      })
      this.subscriptions.forEach((item) =>{
        item.unsubscribe();
      })
    }

}
