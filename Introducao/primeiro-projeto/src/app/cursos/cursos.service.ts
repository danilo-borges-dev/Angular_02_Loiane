import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor() { }

    getCursos()
    {
        return ["Javascrip Avançado","C# Deus","Angular Supremo"];    
    }
}
