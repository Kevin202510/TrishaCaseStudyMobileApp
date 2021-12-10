import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'gen-ed',
    loadChildren: () => import('./gen-ed/gen-ed.module').then( m => m.GenEdPageModule)
  },
  {
    path: 'prof-ed',
    loadChildren: () => import('./prof-ed/prof-ed.module').then( m => m.ProfEdPageModule)
  },
  {
    path: 'english',
    loadChildren: () => import('./english/english.module').then( m => m.EnglishPageModule)
  },
  {
    path: 'filipino',
    loadChildren: () => import('./filipino/filipino.module').then( m => m.FilipinoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
