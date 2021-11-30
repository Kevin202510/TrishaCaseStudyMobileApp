import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfEdPageRoutingModule } from './prof-ed-routing.module';

import { ProfEdPage } from './prof-ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfEdPageRoutingModule
  ],
  declarations: [ProfEdPage]
})
export class ProfEdPageModule {}
