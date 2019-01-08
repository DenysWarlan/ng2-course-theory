import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYear;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl) {
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYear
    });
    carNameEl.value= '';
    this.carYear = 2015;
  }
}
