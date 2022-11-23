import { Component } from '@angular/core';

//Estructura de cada elemento de la lista
interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
 }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  //Lista de nombre elementos cuyo tipo de dato es la interfaz creada anteriormente
  elementos: Elemento[]=[
    
    { //Primer elemento de la lista
      icono: 'footsteps-outline',
      nombre:'Secretos',
      ruta:'/secretos'
    },
    { //Segundo elemento de la lista
      icono: 'cellular-outline',
      nombre:'Niveles',
      ruta:'/niveles'
    },
    { //Tercer elemento de la lista
      icono: 'receipt-outline',
      nombre:'Historia',
      ruta:'/historia'
    },
    { //Cuarto elemento de la lista
      icono: 'newspaper-outline',
      nombre:'Nosotros',
      ruta:'/nosotros'
    }
  ];

  constructor() {}
}
