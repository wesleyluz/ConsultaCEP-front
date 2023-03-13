import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisacepComponent } from './pesquisacep.component';

const routes: Routes = [{ path: '', component: PesquisacepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisacepRoutingModule { }
