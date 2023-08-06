import { Component, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.component.html',
  styleUrls: ['./kategoriak.component.css']
})
export class KategoriakComponent {
  kategoriak:any;
  selectedIndex:any;

  @Output() kategoriaValtas: EventEmitter<any>= new EventEmitter(); 

  constructor(private config:ConfigService){
    this.kategoriak=this.config.getKategoriak();
  }

  click(i:number, kategoria:any){
    this.selectedIndex=i
    this.kategoriaValtas.emit(kategoria)
  }

  isSelected(i:number){
    return i==this.selectedIndex;
  }
}
