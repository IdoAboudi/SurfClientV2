import { Component } from '@angular/core';
import {SocketHandlerService} from '../socket-handler.service'
import {WebSocketService} from '../web-socket.service';

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
