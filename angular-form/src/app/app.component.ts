import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SuperHero } from './superheros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weapons = ["Iron Suit", "Hammer",
    'Bow And Arrow', 'Shield', 'Raw Power'];

  specialities = ['Technology', 'God of Thunder',
    'Archery', 'War & Leadership', 'Scientist'];

  model = new SuperHero(1, "Iron Man", this.weapons[0], this.specialities[0], "Tony Starx")
}
