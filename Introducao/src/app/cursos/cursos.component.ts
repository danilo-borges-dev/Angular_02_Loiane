import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  private nomeDoSistema: string = "";
  private clientes: string[];

  constructor(private cursosService: CursosService) { 

    this.nomeDoSistema = "SisControle";
    this.clientes = cursosService.GetClientes();
  }

  ngOnInit() {
  }

}
