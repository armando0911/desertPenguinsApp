import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Todo lo que ocupamos para ver los personajes vvvv
import { ObjectSecretos, Secreto  } from 'src/app/mcomponentes/interfaces/interfaces';
import { SecretosService } from 'src/app/services/secretos.service';
///// lo necesario para el clic 
import { DetallesecretoComponent } from 'src/app/mcomponentes/detallesecreto/detallesecreto.component';

@Component({
  selector: 'app-secretos',
  templateUrl: './secretos.page.html',
  styleUrls: ['./secretos.page.scss'],
})
export class SecretosPage implements OnInit {

  secretos : Secreto [] = [];

  constructor(private servicioSecretos: SecretosService, private modalCtrl:ModalController ) { }

  //metodo del clic 
  async verDetalle(id: number){
    const modal = await this.modalCtrl.create({
      component:DetallesecretoComponent,
      componentProps: {id}
    });
    modal.present();
  }

  ngOnInit() {

    this.servicioSecretos.getDatos().subscribe((resp: ObjectSecretos) => {
      console.log('conjunto de secretos > ', resp);
      this.secretos = resp.secretos;
      
    })
    
    console.log(this.secretos)


  }

}
