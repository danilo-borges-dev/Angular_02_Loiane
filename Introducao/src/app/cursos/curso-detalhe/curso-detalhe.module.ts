import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursoDetalheComponent
  ],
  exports: [
    CursoDetalheComponent
  ]
})
export class CursoDetalheModule { }
