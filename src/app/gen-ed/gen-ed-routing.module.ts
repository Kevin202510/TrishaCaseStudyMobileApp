import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenEdPage } from './gen-ed.page';

const routes: Routes = [
  {
    path: '',
    component: GenEdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenEdPageRoutingModule {}
