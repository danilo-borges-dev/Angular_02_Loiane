import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getClientes(){
    return [ 
      "Ana Maria",
      "Maria Madalena",
      "Madá Modas",
      "Silvinha Modas",
      "Moda Femina",
    ];
  }
}
