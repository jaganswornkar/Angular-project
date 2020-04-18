import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output emitter is used to emit (send) data from local variable (export data) 
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // two-way data binding used here to get data in variables
  // newServerName = '';
  // newServerContent = '';

  //we can also access local reference using ViewChild  property;
  @ViewChild('serverContentInput', {}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  // these two functions will call when data comes in input variables (two-way-data binding)
  // and these two methods will emit value to those two emitters
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }

}
