import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  @Input()
  symbol;

  @Output()
  input = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickSymbol() {
    this.input.emit(this.symbol);
  }

}
