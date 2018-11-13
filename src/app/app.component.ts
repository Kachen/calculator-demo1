import { Component } from '@angular/core';
import { CalculateService } from 'src/app/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculator DEMO';

  constructor(private cal: CalculateService) { }

  number(num) {
    this.cal.inputNumber(num);
  }

  symbol(sym) {
    this.cal.inputSymbol(sym);
  }

}
