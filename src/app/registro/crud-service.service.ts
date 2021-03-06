// este archivo se crea:
// ionic generate service crudService

import { Injectable } from '@angular/core';
// npm install @ionic/storage-angular
import { Storage } from '@ionic/storage-angular'; //vue , react, js VAnilla

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  dato:any;
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

  async obtener(rut: string)
  {
    this.dato = null;
    await this.storage.forEach((v,k) => {    
      if(v[0].rut==rut)
      {        
        this.dato = v;
        return;
      }
    });
    //return this.storage.get(key);
  }
  // CRUD: create read update delete
  listar()
  {
    let listado = []
    this.storage.forEach((v, k) => { listado.push(v);});
    return listado;
  }
  async eliminar(rut:string)
  {
    let key = null;
    await this.storage.forEach((v,k) => 
    {
      if(v[0].rut == rut)
        key = k;
    })
    this.storage.remove(key);
  }
}
