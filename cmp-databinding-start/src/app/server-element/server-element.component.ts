import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // getting refrence data from app component in element (for that we need to use @Input emitter)
  // this element data is used to show server details
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static:true}) header: ElementRef  // #heading ref from own ts comp
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;  //#contentParagraph ref from parent ts comp, <app component> (Hooks)
  constructor() {
    console.log('constructor called!')
  }
  // (called after a bound input)
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange called!')
    console.log(changes)
  }
  //(called once the component is init)
  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('checking child view content '+ this.header.nativeElement.textContent)
    console.log('Text content of paragraph: '+ this.paragraph.nativeElement.textContent)

  }
  // (called during each changes)
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }
  // (this called when content projected into view)
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: '+ this.paragraph.nativeElement.textContent)

  }
  // (called each time when projected content has been checked)
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  // (called every time the view and child view have been init)
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('checking child view content '+ this.header.nativeElement.textContent)
  }
  // (called every time the view and child view have been checked)
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  // (called once the component is about to destroyed)
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
    
  }
 
}
