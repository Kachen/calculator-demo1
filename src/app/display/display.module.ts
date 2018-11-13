import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { CalculateService } from '../calculate.service';

@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule
  ],
  providers: [CalculateService],
  exports: [
    ScreenComponent
  ]
})
export class DisplayModule { }
