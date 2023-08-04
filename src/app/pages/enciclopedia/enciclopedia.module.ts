import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnciclopediaPageRoutingModule } from './enciclopedia-routing.module';

import { EnciclopediaPage } from './enciclopedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnciclopediaPageRoutingModule
  ],
  declarations: [EnciclopediaPage]
})
export class EnciclopediaPageModule {}
