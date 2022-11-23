import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NivelesPageRoutingModule } from './niveles-routing.module';

import { NivelesPage } from './niveles.page';
//-------------------------------------------------
import { McomponentesModule } from 'src/app/mcomponentes/mcomponentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NivelesPageRoutingModule,
     //-----------
     McomponentesModule
  ],
  declarations: [NivelesPage]
})
export class NivelesPageModule {}
