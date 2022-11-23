import { Component, OnInit } from '@angular/core';

//Todo lo que ocupamos para ver los personajes vvvv
import { ObjectPersonajes, Personajesdp  } from 'src/app/mcomponentes/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';
//Todo lo necesario para al dar clic en el card ver la pantalla detalle
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/mcomponentes/detalle/detalle.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  personajes: Personajesdp [] = [];
  

   //propiedades slide
  opcionesSlide = {
    slidesPerView:1.1,//se muestra uno parte del otro
    freeMode:false,//permite navegacion rapida (libre)
  }

  constructor(private servicioPersonajes: PersonajesService, private modalCtrl:ModalController ) { }

  async verDetalle(id: number){
    const modal = await this.modalCtrl.create({
      component:DetalleComponent,
      componentProps: {id}
    });
    modal.present();
    
  }

  ngOnInit() {

      
        // el navegador está conectado a la red
        this.servicioPersonajes.getDatos().subscribe((resp: ObjectPersonajes) => {
          console.log('conjunto de personajes > ', resp);
          this.personajes = resp.personajesdp;
          
        })
        
        console.log(this.personajes)
  
  
    



  }
  
  

    

}
