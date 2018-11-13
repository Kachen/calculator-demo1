import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number/number.component';
import { SymbolComponent } from './symbol/symbol.component';

@NgModule({
  declarations: [NumberComponent, SymbolComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    NumberComponent,
    SymbolComponent
  ]
})
export class KeyboardModule { }
