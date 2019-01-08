import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2015;
  @Output('onAddCar') carEmitter = new EventEmitter<{name:string, year:number}>();

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    //todo action

    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear,
    });
    this.carName = ' ';
    this.carYear = 2015;
  }
}
