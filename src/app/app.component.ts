import { Component } from '@angular/core';
import {SocketHandlerService} from './services/socket-handler.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  message: string = 'This is the main component'

  constructor(private chat: SocketHandlerService ) {}


    ngOnInit() {
      this.chat.messages.subscribe(msg=> {
        console.log(msg);
      });
    }

    sendMessage() {
      this.chat.sendMsg("Test Messsage")
    }
  }

