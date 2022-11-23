import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//------------------------------

import { CheaderComponent } from './cheader/cheader.component';//Vinculamos al módulo el componente Header

import { IonicModule } from '@ionic/angular';//la librería para reconocer las etiquetas ion que serán utilizadas en el header
import { DetalleComponent } from './detalle/detalle.component';

// detalle -----------

@NgModule({
  declarations: [CheaderComponent,DetalleComponent],//se declara el componente
  exports:[CheaderComponent,DetalleComponent], //se exporta el componente
  imports: [
    CommonModule,
    IonicModule //Se importa el uso de IonicModule
  ]
})
export class McomponentesModule { }
