import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mensaje : string;
  constructor() {}

  ngOnInit()
  {
    /*
    console.log("Hola");
    // permite guardar un dato en el localStorage
    localStorage.setItem("1", "Mi primer valor");

    // permite rescatar un dato en el localStorage por el Id
    const x = localStorage.getItem("1");
    console.log(x);
    */
  }

  guardar(nombre: HTMLInputElement)
  {
    const nom = nombre.value; //recupera la info escrita por el usuario

    if(nom.trim().length >= 3)
    {
      let id = localStorage.length + 1
      localStorage.setItem(id.toString(), nom);
      this.mensaje = "Guardado con éxito: " + nom;
      nombre.value = "";
    }

  }
}
