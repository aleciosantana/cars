import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { FormCarComponent } from '../../components/form-car/form-car';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cars: [
    {
      key: String,
      name: String,
      brand: String,
      model: String,
      img: String
    }
  ]

  constructor(
    public carP: CarProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) {
    this.getCars()
  }

  getCars() {
    this.carP.all().subscribe((data) => {
      this.cars = data
    })
  }

  edit(car) {
    this.pressentModal(car)
  }

  add() {
    this.pressentModal()
  }

  delete(key) {
    this.carP.delete(key)
  }

  pressentModal(car = null) {
    this.modalCtrl
      .create(FormCarComponent, { car })
      .present()
  }

}
