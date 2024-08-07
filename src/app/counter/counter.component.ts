import { Component, Input,  OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit , OnChanges, OnDestroy {
  @Input() startAt: number = 0;
  count: number = 0;
  constructor() {
    console.log('constructor');

  }
  ngOnInit() {
    console.log('init');

    this.count = this.startAt;
  }
  increment() {
    this.count++;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);

  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }
}
