import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  GetClientes(){
    return [
      "Ana Maria",
      "Madalena",
      "Silviha Modas",
      "Moda Intima Feminina",
    ];
  }
}
