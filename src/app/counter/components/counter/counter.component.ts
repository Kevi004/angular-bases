import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <hr>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(2)">+2</button>
  <button (click)="resetButt()">Reset</button>
  <button (click)="increaseBy(-2)">-2</button>
  `,
})

export class CounterComponent  {
  public counter: number = 10;
  increaseBy(num:number): void {
    this.counter += num;
  }
  resetButt(): void {
    this.counter = 10;
  }
  constructor() { }
}


