import { Component, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number, item: number }>();
  @ViewChild('carYearInput') carYearInput;
  @ViewChild('carNameInput') carNameInput;

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    var carYear = +this.carYearInput.nativeElement.value;
    var carName = this.carNameInput.nativeElement.value;
    var item = 1
    this.carEmitter.emit({
      name: carName,
      year: carYear,
      item: item + 1
    });
  }
}
