import { Component, Input, OnInit } from '@angular/core';
//interfaces
import { ObjectSecretosDetalle, SecretoDetalle  } from '../interfaces/interfaces';
//servicio
import { SecretosService } from 'src/app/services/secretos.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detallesecreto',
  templateUrl: './detallesecreto.component.html',
  styleUrls: ['./detallesecreto.component.scss'],
})
export class DetallesecretoComponent implements OnInit {

  //Recuperamos ID
  @Input() id:number;

  secretoDetalle : SecretoDetalle = {}
  //------------------->

  constructor(private servicioSecretos: SecretosService, private modalCtrl:ModalController) { }

  //funcion regresar
  regresar(){
    this.modalCtrl.dismiss();
  }


  ngOnInit() {

    console.log('----------Detalle Secreto -------------')

    this.servicioSecretos.getDatosID(this.id).subscribe((resp: SecretoDetalle)=>{
      console.log('datos >>>', resp);
      this.secretoDetalle=resp;
    });
    console.log(this.secretoDetalle)
  }

}

