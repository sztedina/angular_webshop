import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Aru } from './aru';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private db: AngularFireDatabase) { }

  get(kategoria:any){
    if (!kategoria) kategoria="BBQ"
    const aruRef:AngularFireList<Aru> =
    this.db.list('/aruk/'+kategoria)
    return aruRef
  }
  
}
