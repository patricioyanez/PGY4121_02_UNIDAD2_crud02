import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private apiURL = 'https://jsonplaceholder.typicode.com/';
  listado = [];
  datos : any;
  constructor(private http: HttpClient) { }

  getUsers()
  {
    this.listado = [];
    this.datos = "";
    let url = this.apiURL + 'users';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:[]) => {
        data.forEach(item => {this.listado.push(item);})
        //console.table(this.listado);
      },
      err => {
        console.log("Ocurrio un error");
      })
    })
  }
  getUser(id: String)
  {
    this.listado = [];
    this.datos = "";
    let url = this.apiURL + 'users/' + id;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data:any) => {
        resolve(data);
        this.datos = data;
        //console.log(data);
      },
      err => {
        console.log("Ocurrio un error");
      })
    })
  }
}
