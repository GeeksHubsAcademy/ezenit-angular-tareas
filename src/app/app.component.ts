import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetFocusDirective } from "./directives/get-focus.directive";
import { BackgroundDirective } from "./directives/background.directive";
import {  CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GetFocusDirective, BackgroundDirective, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ezenit-angular-tareas';
  secondsNow = Math.floor(Date.now() / 1000);
  count =  0;
  colors = ['red', 'green', 'blue'];
  color= 'red';
  smiles = ['😋', '🤑', '🤡']

  inc() {
    this.count++;
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsNow = Math.floor(Date.now() / 1000);
      this.color = this.colors[this.secondsNow % 3];
    }, 1000);
  }
  isHidden() {
    console.log('isHidden');

   return this.secondsNow % 10 === 0;
  }
}
