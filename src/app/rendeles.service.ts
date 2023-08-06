import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendelesService {
  rendeles:any[]=[];
  constructor() { }

  megrendeles= new BehaviorSubject(this.rendeles)

  getRendeles(){
    return this.megrendeles;
  }

  addTetetl(rendeles:any){
    
    const index= this.rendeles.findIndex(x=> x.aru.key==rendeles.aru.key)
    if (index!==-1) {
      this.rendeles[index].mennyiseg=
        Math.round((Number( this.rendeles[index].mennyiseg)+
        Number(rendeles.mennyiseg))*10)/10
    }
    else this.rendeles.push(rendeles);
    this.megrendeles.next(this.rendeles);
  }

  deleteTetel(tetel:any){
    this.rendeles=this.rendeles.filter(x=> x!==tetel)
    this.megrendeles.next(this.rendeles);
  }
}
