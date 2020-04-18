import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4-structural-directives';
  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8, 10];
  onlyOdd = false;
  value = 119

}
