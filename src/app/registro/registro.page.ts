import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from './crud-service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  constructor(private crud: CrudServiceService) { }

  ngOnInit() {
    this.crud.agregar("1", "{'nombre' :'Juan', 'rut' : '1-9'}");    
    const valor = this.crud.obtener("1");
    valor.then(x => console.log(x));


    // TAREA: Como obtener el rut y nombre de Juan
    // nombre : Juan
    // rut : 1-9
  }

}
