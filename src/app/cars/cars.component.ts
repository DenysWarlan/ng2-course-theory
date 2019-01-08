import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
    cars: [{ name: string, year: number }] = [{
    name: 'Ford',
    year: 2015
  }];
  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }
}

