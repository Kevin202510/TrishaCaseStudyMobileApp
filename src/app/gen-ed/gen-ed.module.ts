import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenEdPageRoutingModule } from './gen-ed-routing.module';

import { GenEdPage } from './gen-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenEdPageRoutingModule
  ],
  declarations: [GenEdPage]
})
export class GenEdPageModule {}
