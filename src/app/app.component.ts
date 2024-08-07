import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetFocusDirective } from "./get-focus.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GetFocusDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ezenit-angular-tareas';
  secondsNow = Math.floor(Date.now() / 1000);
  count = 0;

  smiles = ['😋', '🤑', '🤡']

  inc() {
    this.count++;
  }

  ngOnInit() {
    setInterval(() => {
      this.secondsNow = Math.floor(Date.now() / 1000);
    }, 1000);
  }
  isHidden() {
    console.log('isHidden');

   return this.secondsNow % 10 === 0;
  }
}
