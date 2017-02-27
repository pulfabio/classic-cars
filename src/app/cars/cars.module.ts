import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarsService } from "./cars.service";

import { CarsComponent } from './cars.component';

@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CarsService
  ],
  exports: [
    CarsComponent
  ]
})
export class CarsModule { }