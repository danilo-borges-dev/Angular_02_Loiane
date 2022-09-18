import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  private nomeDoSistema: string = "";
  private listaDeClientes: string[];

  constructor(private clientes: CursosService) { 
    this.nomeDoSistema = "SisControle";
    this.listaDeClientes = clientes.getClientes();
  }

  ngOnInit() {
  }

}
