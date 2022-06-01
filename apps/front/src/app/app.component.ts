import { Component } from '@angular/core';

@Component({
  selector: 'tip-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tipAmount = 0;
  total = 0;
  _people = 1;

  set people(value: number) {
    this._people = value;
    this.calculate();
  }

  get people(): number {
    return this._people;
  }

  _bill = 0;

  set bill(value: number) {
    this._bill = value;
    this.calculate();
  }

  get bill(): number {
    return this._bill;
  }

  selectedTip = 5;

  selectTip(amount: number) {
    this.selectedTip = amount;
    this.calculate();
  }

  getSelectedTip() {
    return this.selectedTip;
  }

  calculate() {
    this.tipAmount = (this.bill * (this.selectedTip / 100)) / this.people;
    this.total = this.bill / this.people + this.tipAmount;
  }

  reset() {
    this.bill = 0;
    this.people = 1;
    this.selectedTip = 0;
  }
}
