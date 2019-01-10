import { Component, OnInit, ViewEncapsulation, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { Element } from '@angular/compiler';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @ViewChild('carChangeNameInput') carChangeNameInput: ElementRef;
  @ViewChild('carItem') carItem: ElementRef;

  cars: [{ name: string, year: number }] = [{
    name: 'Ford',
    year: 2015
  }];

  updateCarList(car: { name: string, year: number}) {
    this.cars.push(car);
  }
  changecarmodel() {
    console.log(this.carChangeNameInput)
    var carItem = +this.carItem.nativeElement.value;
    this.cars[carItem].name = this.carChangeNameInput.nativeElement.value;
  }
  DeletedCar() {
    var carItem = +this.carItem.nativeElement.value;
    this.cars.splice(0, carItem);
  }
}

