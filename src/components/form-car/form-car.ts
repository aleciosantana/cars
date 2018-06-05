import { Component } from '@angular/core';

import { CarProvider } from '../../providers/car/car';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the FormCarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-car',
  templateUrl: 'form-car.html'
})
export class FormCarComponent {

  car: {
    name: String,
    brand: String,
    model: String,
    img: String
  }

  models: [
    'wolksvagem', 'fiat', 'toyota', 'ford', 'chevrolet'
  ]

  constructor(
    private carP: CarProvider,
    private viewCtrol: ViewController
  ) {
    const car = this.viewCtrol.getNavParams().data['car']
    this.car = car || { }
  }

  save() {
    if (! this.car.name) return

    if ('key' in this.car)
      this.carP.update(this.car)
    else
      this.carP.save(this.car)

    this.viewCtrol.dismiss()
  }

  close() {
    this.viewCtrol.dismiss()
  }

}
