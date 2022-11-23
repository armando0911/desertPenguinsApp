import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrosPageRoutingModule } from './nosotros-routing.module';

import { NosotrosPage } from './nosotros.page';
//----------------------------
import { McomponentesModule } from 'src/app/mcomponentes/mcomponentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosPageRoutingModule,
    //-----------
    McomponentesModule
  ],
  declarations: [NosotrosPage]
})
export class NosotrosPageModule {}
