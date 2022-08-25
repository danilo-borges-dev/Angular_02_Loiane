import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeuPrimeirComponent } from './meu-primeiro/meu-primeiro-component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { MeuTerceiroComponent } from './meu-terceiro/meu-terceiro.component';
import { MeuQuartoComponent } from './meu-quarto/meu-quarto-component';
import { MeuQuintoComponent } from './meu-quinto/meu-quinto-component';
import { MeuSextoComponent } from './meu-sexto/meu-sexto.component';
import { MeuSetimoComponentComponent } from './meu-setimo-component/meu-setimo-component.component';

@NgModule({
  declarations: [	
    AppComponent,
    MeuPrimeirComponent,
    MeuSegundoComponent,
    MeuTerceiroComponent,
    MeuQuartoComponent,
    MeuQuintoComponent,
    MeuSextoComponent,
      MeuSetimoComponentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
