import { Component, Input, SimpleChanges } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';
import { ConfigService } from '../config.service';
import { RendelesService } from '../rendeles.service';

@Component({
  selector: 'app-aruk',
  templateUrl: './aruk.component.html',
  styleUrls: ['./aruk.component.css']
})
export class ArukComponent {
  @Input() kategoria:any="Édes pékaru";
  aruk:any;
  suly:any=[];

  ngOnChanges(changes:SimpleChanges){
    let kategoriaValtozas = changes["kategoria"]

    if ( kategoriaValtozas && kategoriaValtozas.previousValue!=kategoriaValtozas.currentValue)
    this.get();
  }

  constructor(private base:BaseService, private config:ConfigService, private rendeles:RendelesService)
  {
    this.get();
    this.suly=this.config.getSuly();
   }
  get(){
    this.base.get(this.kategoria).snapshotChanges().pipe(
      map ( ch=> ch.map( c=> ({ key:c.payload.key, ...c.payload.val()})))
    )
    .subscribe(
      a => this.aruk=a
    )
  }

  addTetel(aru:any, mennyiseg:any){
    console.log(aru, mennyiseg)
    this.rendeles.addTetetl({aru:aru, mennyiseg:mennyiseg})
  }
}
