import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//Todo lo que ocupamos para ver los personajes vvvv
import { ObjectHistoria, Historia  } from 'src/app/mcomponentes/interfaces/interfaces';
import { HistoriaService } from 'src/app/services/historia.service';  


@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  historia: Historia [] = [];

  constructor(private servicioHistoria:HistoriaService, private modalCtrl:ModalController) { }

  ngOnInit() {

    this.servicioHistoria.getDatos().subscribe((resp: ObjectHistoria) => {
      console.log('conjunto de datos historia > ', resp);
      this.historia = resp.historia;
      
    })
    
    console.log(this.historia)



  }

}
