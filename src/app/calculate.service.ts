import { Injectable } from '@angular/core';
import { resetComponentState } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  display = '0';
  statement = '';
  input = 0;
  operator;
  result;
  calculating = false;
  equaled = false;

  constructor() { }

  inputNumber(num) {
    if (this.calculating) {
      this.display = '';
      this.calculating = false;
    }
    if (this.display === '0' && num !== '.') {
      this.display = '';
    }
    this.display += num;
  }
  inputSymbol(sym) {
    if (!this.calculating) {
      this.input = Number(this.display);
    }
    switch (sym) {
      case 'ac':
        this.ac();
        break;
      case '+/-':
        this.result = this.input * -1;
        this.display = this.result.toString();
        break;
      case '%':
        this.result = this.input * 0.01;
        this.display = this.result.toString();
        break;
      case '=':
        if (!this.equaled) {
          this.statement += this.input;
          this.cal();
        }
        this.calculating = false;
        this.equaled = true;
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        console.log('operat: ' + this.input);
        this.operator = sym;
        if (!this.equaled) {
          this.statement += this.input;
          this.cal();
        }
        this.calculating = true;
        this.equaled = false;
        break;
    }
  }
  cal() {
    if (this.statement) {
      console.log('result: ' + this.statement);
      this.result = eval(this.statement);
    }
    this.display = this.result.toString();
    this.statement = this.result + this.operator;
  }
  ac() {
    this.calculating = false;
    this.result = undefined;
    this.input = 0;
    this.display = '0';
    this.statement = '';
    this.operator = undefined;
  }
}
