import { Component } from '@angular/core';

@Component({
  selector: 'app-butorok',
  templateUrl: './butorok.component.html',
  styleUrl: './butorok.component.css'
})
export class ButorokComponent {

  butorok:Butorok[] = []
  cikkszamV: string = "";
  megnevezesV: string = "";
  arV: number = 0;
  dbV: number = 0;


  Felvitel():void {
    var b:Butorok = {
      Cikkszam: this.cikkszamV,
      Megnevezes: this.megnevezesV,
      Ar: this.arV,
      Db: this.dbV,
    }
    this.butorok.push(b)
  } 
}

export interface Butorok {
  Cikkszam: string,
  Megnevezes: string,
  Ar: number,
  Db: number
}