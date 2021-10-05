import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private storage: Storage) { 
    this.init();
  }

  async init()
  {
    await this.storage.create();
  }

  async agregar(key: string, valor: any)
  {
    await this.storage.set(key, valor)
  }

  obtener(key: string)
  {
    return this.storage.get(key);
  }

}
