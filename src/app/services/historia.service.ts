import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private http:HttpClient) { }

  //metodo para recuperar los datos
  getDatos(){
    return this.http.get('https://historiadp-a180f-default-rtdb.firebaseio.com/.json');
  }
}
