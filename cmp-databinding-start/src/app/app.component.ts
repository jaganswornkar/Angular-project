import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // this array will get values from onServerAdded and onBlueprintAdded methods;
  serverElements = [{ name: 'testserver', type: 'server', content: 'just a test' }];

  // this function get values from app-cockpit component via (serverCreated)="onServerAdded($event)"
  // which is passing an event which accepting as serverData and assigning the values to serverElements array.
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!'
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
