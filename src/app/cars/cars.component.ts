import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

     AddCars = '';
     inputText = '';
      constructor () {

      }
      addCar() {
        this.AddCars = 'Added Car';
      }
  onKeyUp(event) {
  this.inputText = event.target.value;
    }
}

