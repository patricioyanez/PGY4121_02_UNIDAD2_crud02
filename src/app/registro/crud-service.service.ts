// este archivo se crea:
// ionic generate service crudService

import { Injectable } from '@angular/core';
// npm install @ionic/storage-angular
import { Storage } from '@ionic/storage-angular'; //vue , react, js VAnilla

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  dato = [];
  constructor(private storage: Storage) { 
    this.init();
  }

  async init()
  {
    await this.storage.create();
  }

  //async agregar(key: string, valor: any)
  async agregar(valor: any) // json
  {
    let id = await this.storage.length() +  1;
    await this.storage.set(id.toString(), valor)
  }

 obtener(rut: string)
  {
    this.storage.forEach((v,k) => {    
      if(v[0].rut==rut)
      {
        return  this.dato.push(v);

      }

    });

    //return this.storage.get(key);
  }

}
