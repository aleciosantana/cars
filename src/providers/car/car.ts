// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs-compat';

/*
  Generated class for the CarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarProvider {

  constructor(
    // public http: HttpClient,
    public fb: AngularFireDatabase
  ) { }

  all() {
    const cars = ({ payload }) => ({ key: payload.key, ...payload.val() })
    const changes = changes => changes.map(cars)

    return this.fb.list('cars').snapshotChanges().map(changes)
  }

  save(user) {
    this.fb.list('cars').push(user)
  }

  delete(key) {
    this.fb.list('cars').remove(key)
  }

  update(car) {
    const { key } = car;
    delete car.key;

    this.fb.list('cars').update(key, car);
  }

}
