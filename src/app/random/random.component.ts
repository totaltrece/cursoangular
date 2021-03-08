import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  numrandom: Number = Math.floor(Math.random()*10);

  colorInRandom: string;

  condicion: Boolean;
  textoalternativo : String = 'soy el texto alternativo';

  constructor() { }

  ngOnInit(): void {
  }

  generateRandom(): String {
      return Math.floor(Math.random()*16777215).toString(16);
  }

  colorHex(): String {
    this.colorInRandom = '#'+ this.generateRandom();
    return this.colorInRandom;
  }

}
