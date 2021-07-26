import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatamockService {

  getDataset() {
    return [
      {'label' : 'Moins de 200 euros', 'value': 4.0},
      {'label' : '200 à 499 euros', 'value': 4.0},
      {'label' : '500 à 999 euros', 'value' : 4.0},
      {'label' : '1 000 à 1 499 euro', 'value' : 4.0},
      {'label' : '1 500 à 1 999 euro', 'value' : 4.0},
      {'label' : '2 000 à 2 999 euros', 'value' : 4.0},
      {'label' : '3 000 à 3 999 euros', 'value' : 4.0},
      {'label' : '4 000 à 5 999 euros', 'value' : 4.0},
      {'label' : '6 000 à 7 999 euros', 'value' : 4.0},
      {'label' : '8 000 à 9 999 euros', 'value' : 4.0},
      {'label' : '10 000 à 11 999 euros', 'value' : 4.0},
      {'label' : '12 000 à 13 999 euros', 'value' : 4.0},
      {'label' : '14 000 à 15 999 euros', 'value' : 4.0},
      {'label' : '16 000 à 17 999 euros', 'value' : 4.0},
      {'label' : '18 000 à 19 999 euros', 'value' : 4.0},
      {'label' : '20 000 à 21 999 euros', 'value' : 4.0},
      {'label' : '22 000 à 23 999 euros', 'value' : 4.0},
      {'label' : '24 000 à 25 999 euros', 'value' : 4.0},
      {'label' : '26 000 à 27 999 euros', 'value' : 4.0},
      {'label' : '28 000 à 29 999 euros', 'value' : 4.0},
      {'label' : '30 000 à 34 999 euros', 'value' : 4.0},
      {'label' : '35 000 à 39 999 euros', 'value' : 4.0},
      {'label' : '40 000 à 49 999 euros', 'value' : 4.0},
      {'label' : '50 000 euros et plus', 'value' : 4.0},
    ];
  }

  constructor() { }
}
