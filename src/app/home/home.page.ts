import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  palabra : string;
  constructor() {}

  ngOnInit()
  {
    console.log("Hola");
    localStorage.setItem("1", "Mi primer valor");

    const x = localStorage.getItem("1");
    console.log(x);
  }

}
