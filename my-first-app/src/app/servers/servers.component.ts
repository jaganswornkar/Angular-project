import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  addComment = "new server"
  servers  = ['testserver', 'testserver 2']
  serverCreated = false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.addComment)
    this.serverCreationStatus = "New Server Created! and the servername is "+ this.addComment
  }

  commentHandler(event: Event){
    this.addComment = (<HTMLInputElement>event.target).value
  }
}
