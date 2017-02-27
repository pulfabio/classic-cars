import { Component, OnInit } from '@angular/core';

import { CarsService } from "./cars.service";

import { Car } from "./car";

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}