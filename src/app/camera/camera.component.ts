import { Component } from '@angular/core';
import {SocketHandlerService} from '../services/socket-handler.service'
import {WebSocketService} from '../services/web-socket.service';

@Component({
  selector: 'inner-component',
  templateUrl: './camera.component.html',
})

export class CameraComponent  {
  constructor(private SocketHandlerService: SocketHandlerService){}

  ngOnInit()
  {
    // this.SocketHandlerService.sendEnteredComn("Camera");
  }
}
