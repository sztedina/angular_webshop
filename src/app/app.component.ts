import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Webshop';
  kategoria:any;

  constructor(private ms:NgbModal,
    public auth: AngularFireAuth){}

  public open(modal:any){
    this.ms.open(modal);
  }

  sikeresBelepes(event:any){
    console.log("Sikeresen beléptünk!");
    console.log(event);
  }

  sikertelenBelepes(event:any){
    console.log("Nem sikerült belépni!");
    console.log(event);
  }
   
  kategoriaValtas(kategoria:any){
    this.kategoria=kategoria;
  }
}
