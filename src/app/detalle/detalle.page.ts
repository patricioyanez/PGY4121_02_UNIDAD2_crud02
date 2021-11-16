import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  datos : any;
  idPersona : String;
  constructor(private api:ApirestService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( p => {
      this.idPersona = p.get('id');
      this.leer();
    })
  }

  async leer()
  {    
    await this.api.getUser(this.idPersona);
    this.datos = this.api.datos;
    //console.log("metodo leer"  + this.datos);
  }

}
