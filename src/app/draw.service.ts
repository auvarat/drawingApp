import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor(private socket: Socket) { }

  sendDraw(data: any) {
    this.socket.emit('draw', data);
  }

  onDraw() {
    return this.socket.fromEvent('draw');
  }
}
