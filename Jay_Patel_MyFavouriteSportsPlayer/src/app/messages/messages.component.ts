import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messagesservice';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(public Messagesservice: MessagesService) {}

  ngOnInit() {}
}