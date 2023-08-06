import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private kategoriak = [
    "Édes pékáru","Sós péksütemények","Pék aprósütemények","Kalácsok","Kenyerek"
  ]
  private suly:any=[];

  pushSuly(){
    for (let i = 0.2; i <= 3.1; i=i+0.1) {
      this.suly.push(Math.round(i*10)/10);
    }
  }
  getSuly(){
    return this.suly;
  }

  constructor() {
    this.pushSuly();
   }

  getKategoriak(){
    return this.kategoriak;
  }
}
