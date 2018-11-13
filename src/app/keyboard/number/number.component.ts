import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input()
  number;

  @Output()
  input = new EventEmitter<any>();

  ngOnInit() {
  }

  clickNumber() {
    this.input.emit(this.number);
  }

}
