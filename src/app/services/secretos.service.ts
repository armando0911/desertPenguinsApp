import { Injectable } from '@angular/core';
//----- se importa el http client- RECUERDA QUE EN ESTE PASO VE AL APP.MODULE.TS Y IMPORTA EL HTTP-CLIENT
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretosService {

  constructor(private http:HttpClient) { }

  //metodo para recuperar los datos
  getDatos(){
    return this.http.get('https://secretosdp-a16c2-default-rtdb.firebaseio.com/.json');
  }
  //Metodo para recuperar el usuario con ID
  getDatosID(id:number){
    return this.http.get('https://secretosdp-a16c2-default-rtdb.firebaseio.com/secretos/'+(id-1)+'/.json');
    //https://secretosdp-a16c2-default-rtdb.firebaseio.com/secretos/0/.json
    //asi va la url para obtener datos 
  }


}
