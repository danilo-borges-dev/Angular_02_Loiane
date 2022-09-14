import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';

import { CursoDetalheModule } from './curso-detalhe/curso-detalhe.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    CursoDetalheModule
  ],
  declarations: 
  [
    CursosComponent
  ],
  exports: [
    CursosComponent,
    CursoDetalheComponent
  ]
})
export class CursosModule { }
