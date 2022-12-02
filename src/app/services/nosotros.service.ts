import { Injectable } from '@angular/core';
//----- se importa el http client- RECUERDA QUE EN ESTE PASO VE AL APP.MODULE.TS Y IMPORTA EL HTTP-CLIENT
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NosotrosService {

  constructor(private http:HttpClient) { }

  //metodo para recuperar los datos
  getDatos(){
    return this.http.get('https://nosotros-9fa79-default-rtdb.firebaseio.com/.json');
  }
}
