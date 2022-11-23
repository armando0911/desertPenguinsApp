import { Component, Input, OnInit } from '@angular/core';
//interfaces
import { ObjectPersonajesDetalle, PersonajesdpDetalle } from '../interfaces/interfaces';
//servicio
import { PersonajesService } from 'src/app/services/personajes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id:number;

  personajeDetalle : PersonajesdpDetalle = {}


  constructor(private servicioPersonaje: PersonajesService, private modalCtrl:ModalController) { }

  
  regresar(){
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    console.log('-----------------------')

    this.servicioPersonaje.getDatosID(this.id).subscribe((resp: PersonajesdpDetalle)=>{
      console.log('datos >>>', resp);
      this.personajeDetalle=resp;
    });
    console.log(this.personajeDetalle)
  }

}
