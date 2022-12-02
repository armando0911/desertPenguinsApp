import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Todo lo que ocupamos para ver los niveles vvvv
import { ObjectNosotros, Nosotro  } from 'src/app/mcomponentes/interfaces/interfaces';
import { NosotrosService } from 'src/app/services/nosotros.service'; 
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  nosotros: Nosotro [] = [];

   //propiedades slide
   opcionesSlide = {
    slidesPerView:1.1,//se muestra uno parte del otro
    freeMode:false,//permite navegacion rapida (libre)
  }

  constructor(private servicioNosotros:NosotrosService, private modalCtrl:ModalController) { }

  ngOnInit() {

    this.servicioNosotros.getDatos().subscribe((resp: ObjectNosotros) => {
      console.log('conjunto de nosotros > ', resp);
      this.nosotros = resp.nosotros;
      
    })
    
    console.log(this.nosotros)


  }

}
