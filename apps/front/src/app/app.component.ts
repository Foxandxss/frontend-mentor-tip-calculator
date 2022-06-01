import { Component } from '@angular/core';

@Component({
  selector: 'tip-calculator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tipAmount = 0;
  total = 0;
  _people?: number;
  _bill?: number;

  set people(value: number | undefined) {
    this._people = value;
    if (value) {
      this.calculate();
    }
  }

  get people(): number | undefined {
    return this._people;
  }

  set bill(value: number | undefined) {
    this._bill = value;
    if (value) {
      this.calculate();
    }
  }

  get bill(): number | undefined {
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
    if (!this.bill || !this.people) {
      return;
    }
    this.tipAmount = (this.bill * (this.selectedTip / 100)) / this.people;
    this.total = this.bill / this.people + this.tipAmount;
  }

  reset() {
    this.bill = undefined;
    this.people = undefined;
    this.selectedTip = 5;
    this.tipAmount = 0;
    this.total = 0;
  }

  resetDisabled() {
    return !this.bill || !this.people;
  }
}
