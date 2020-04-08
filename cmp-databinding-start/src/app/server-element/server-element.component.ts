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
  @ViewChild('heading', {static:true}) header: ElementRef
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor caled!')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange called!')
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('checking child view content '+ this.header.nativeElement.textContent)
    console.log('Text content of paragraph: '+ this.paragraph.nativeElement.textContent)

  }
  ngDoCheck() {
    console.log('ngDoCheck called!')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: '+ this.paragraph.nativeElement.textContent)

  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('checking child view content '+ this.header.nativeElement.textContent)
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called!');
    
  }
 
}
