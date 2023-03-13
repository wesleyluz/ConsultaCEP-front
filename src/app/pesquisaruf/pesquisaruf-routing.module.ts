import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarufComponent } from './pesquisaruf.component';

const routes: Routes = [{ path: '', component: PesquisarufComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisarufRoutingModule { }
