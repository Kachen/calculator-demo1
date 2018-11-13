import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { KeyboardModule } from './keyboard/keyboard.module';
import { CalculateService } from './calculate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayModule,
    KeyboardModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
