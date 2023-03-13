import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisarufRoutingModule } from './pesquisaruf-routing.module';
import { PesquisarufComponent } from './pesquisaruf.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PesquisarufComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PesquisarufRoutingModule
  ]
})
export class PesquisarufModule { }
