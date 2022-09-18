import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  private nomeDoSistema: string = "";
  private clientes: string[] = [
    "Ana Maria",
    "Madalena",
    "Silviha Modas",
    "Moda Intima Feminina",
  ];

  constructor() { 
    this.nomeDoSistema = "SisControle";
  }

  ngOnInit() {
  }

}
