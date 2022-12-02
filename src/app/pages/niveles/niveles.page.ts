import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Todo lo que ocupamos para ver los niveles vvvv
import { ObjectNivel, Nivel  } from 'src/app/mcomponentes/interfaces/interfaces';
import { NivelesService } from 'src/app/services/niveles.service'; 

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit {

  niveles: Nivel [] = [];

  constructor(private servicioNivel:NivelesService, private modalCtrl:ModalController) { }

  ngOnInit() {

     
    this.servicioNivel.getDatos().subscribe((resp: ObjectNivel) => {
      console.log('conjunto de niveles > ', resp);
      this.niveles = resp.nivel;
      
    })
    
    console.log(this.niveles)


  }

}
