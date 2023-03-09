declare const require: any;

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class playerService {
  constructor(private messagesService: MessagesService) {}

  getplayer(): Observable<any[]> {
    const player = of(require('./contentDb/players.json'));
    this.messagesService.add('Content array loaded!');
    return player;
  }

  getplayerById(id: number): Observable<any> {
    const player = require('./contentDb/players.json');
    const playerService = player.find((m: Content) => m.id === id);
    this.messagesService.add(`Content Item at id: ${id}`);
    return of(player);
  }
}