import { Component } from '@angular/core';
import { RendelesService } from '../rendeles.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent {
  tetelek:any;
  constructor(private rendeles:RendelesService){
    this.rendeles.getRendeles().subscribe(
      (adatok)=> this.tetelek=adatok
    )
  }

  deleteTetel(tetel:any){
    this.rendeles.deleteTetel(tetel)
  }

  ar(ar:number, mennyiseg:number){
    return Math.round((ar*mennyiseg*100))/100
  }

  osszesen(){
    let sum=0;

    if (this.tetelek.length)

    for (let i = 0; i < this.tetelek.length; i++) {
      sum += this.ar(this.tetelek[i].aru.ar, this.tetelek[i].mennyiseg)
      
    }


    return Math.round(sum)
  }

  elkuld(){
    var templateParams = {
      to_name: 'Felhasználó',
      message: 'Új megrendelést adtál le',
      notes: '',
      cc_address:'szt.edina@gmail.com',
      f_name: 'Webshop'
  };

  templateParams.notes='<table>'
  for (let i = 0; i < this.tetelek.length; i++) {
    templateParams.notes+='<tr><td><img style="width:20%;" src="'+this.tetelek[i].aru.kep+'" alt="Áru"></td></tr>'
    templateParams.notes+='<td>'+this.tetelek[i].aru.leiras+'</td>'
    templateParams.notes+='<td>'+this.ar(this.tetelek[i].aru.ar,this.tetelek[i].mennyiseg)+' Ft</td>'
    templateParams.notes+='</>'
    
  }
  templateParams.notes+='</table><p>Összesen: '+this.osszesen()+'Ft</p>'
   
  emailjs.send('103775186970680142009', 'template_xjo7tcr', templateParams, 'Tn_wAmSuIhgtKW2tB')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
  }
}
