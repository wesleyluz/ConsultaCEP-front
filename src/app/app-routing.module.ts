import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pesquisacep', loadChildren: () => import('./pesquisacep/pesquisacep.module').then(m => m.PesquisacepModule) },
  {path:"", redirectTo:"pesquisacep",pathMatch:"full"},
  { path: 'pesquisaruf', loadChildren: () => import('./pesquisaruf/pesquisaruf.module').then(m => m.PesquisarufModule) },
  {path:"**", redirectTo:'notfound',pathMatch:"full"},
  { path: 'notfound', loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
