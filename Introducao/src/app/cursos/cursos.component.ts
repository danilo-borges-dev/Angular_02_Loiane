import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  private nomeDoSistema: string;
  clientes: string[] = [ 
    "Ana Maria", 
    "Eliza", 
    "Silvinha Modas",
    "Madalena Modas" 
  ];

  constructor() { 
    this.nomeDoSistema = "SisControle"
  }

  ngOnInit() {
  }

}
