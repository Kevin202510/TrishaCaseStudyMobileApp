import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfEdPage } from './prof-ed.page';

const routes: Routes = [
  {
    path: '',
    component: ProfEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfEdPageRoutingModule {}
