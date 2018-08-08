import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';
@Injectable()
export class WebSocketService {

  private socket; //socket that connects to our socket.io server
  constructor() { }

  connect(): Rx.Subject<String> {
    this.socket = io("http://localhost:5000");

    let observable = new Observable(observer => {
      this.socket.on('stats', (data) => {
        console.log("Received message from Websocket Server")
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('stats', JSON.stringify(data));
      },
    };


    return Rx.Subject.create(observer,observable);

    }



}
