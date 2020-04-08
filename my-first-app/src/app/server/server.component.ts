import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    ServerId: number = 10;
    ServerStatus: string = "";

    constructor() {
        this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }
    getColor(){
        return this.ServerStatus === 'Online'?'green':'red'
    }
}
