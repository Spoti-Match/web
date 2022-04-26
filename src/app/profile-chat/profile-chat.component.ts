import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VERSION} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from '../models/authentication-request/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response/authentication-response';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-profile-chat',
  templateUrl: './profile-chat.component.html',
  styleUrls: ['./profile-chat.component.scss']
})
export class ProfileChatComponent implements OnInit {


  @ViewChild("ChatListContainer", {static: false}) ChatListContainer : ElementRef

  chatInput: string ="";

  currentUser = {
    name: "John Doe",
    id: 1,
    profileImageUrl:'https://pickaface.net/gallery/avatar/20151205_194059_2696_Chat.png'
  }

  User1 = {
    name: "Jane Doe",
    id: 2,
    profileImageUrl:'https://thumbs.dreamstime.com/b/call-center-agent-avatar-vector-illustration-design-94931997.jpg'
  }

  User2 = {
    name: "Joan Doe",
    id: 3,
    profileImageUrl:'https://us.123rf.com/450wm/jemastock/jemastock1708/jemastock170806710/83824989-centro-de-atenci%C3%B3n-al-cliente-atenci%C3%B3n-al-cliente-asistente-icono-de-avatar-ilustraci%C3%B3n-vectorial-di.jpg'
  }

  chatmessage: {

    user: any,
    message: string
    createdat: number
  } [] = [
    {
      user: this.currentUser,
      message: 'Message placement curruser',
      createdat: Date.now(),
    },

    {
      user: this.User1,
      message: 'Message placement user1',
      createdat: Date.now(),
    },

    {
      user: this.User2,
      message: 'Message placement user2',
      createdat: Date.now(),
    },

    {
      user: this.currentUser,
      message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac varius turpis, nec varius tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
        'Praesent faucibus mollis purus, vitae accumsan dolor fermentum vitae. Pellentesque euismod tellus ac nisi congue porta. Nullam tortor dolor, iaculis vitae tincidunt vitae, sodales at ipsum. ' +
        'Duis consequat pharetra lacinia. Integer posuere porttitor augue ut bibendum. Proin tincidunt, turpis sed sollicitudin malesuada, mauris eros posuere orci, et tempor metus sapien sit amet risus. ' +
        'Morbi imperdiet eget dolor et ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi non tellus venenatis, convallis sem in, lobortis ligula. ' +
        'Vivamus congue, augue in cursus elementum, diam lacus efficitur turpis, a dictum odio felis non arcu."',
      createdat: Date.now(),
    },

  ]



name='Angular ' + VERSION.major;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  send() {
    this.chatmessage.push({
      message: this.chatInput,
      user: this.currentUser,
      createdat: Date.now()
    });
    this.chatInput ='';
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.ChatListContainer.nativeElement.scrollTop = this.ChatListContainer.nativeElement.scrollHeight
  }

  constructor() { }
  jwToken: String = "abab";
  constructor(private userService: UserService) { }

  ngOnInit(): void {


  }

  test(){
    this.userService.getToken(new AuthenticationRequest("test@gmail.com","password"));
  }

  test2(){
    console.log(sessionStorage.getItem("authToken"))
  }

  test3(){
    this.userService.getTest();
  }
}
