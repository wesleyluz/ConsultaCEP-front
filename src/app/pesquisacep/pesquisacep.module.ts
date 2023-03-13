import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisacepRoutingModule } from './pesquisacep-routing.module';
import { PesquisacepComponent } from './pesquisacep.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PesquisacepComponent
  ],
  imports: [
    CommonModule,
    PesquisacepRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class PesquisacepModule { }
