import { Injectable } from '@angular/core';
//----- se importa el http client- RECUERDA QUE EN ESTE PASO VE AL APP.MODULE.TS Y IMPORTA EL HTTP-CLIENT
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

  //metodo para recuperar los datos
  getDatos(){
    return this.http.get('https://personajesdpapp-default-rtdb.firebaseio.com/.json');
  }
  //Metodo para recuperar el usuario con ID
  getDatosID(id:number){
    return this.http.get('https://personajesdpapp-default-rtdb.firebaseio.com/personajesdp/'+(id-1)+'/.json');
    //https://personajesdpapp-default-rtdb.firebaseio.com/personajesdp/1/.json
    //asi va la url para obtener datos 
  }



}
