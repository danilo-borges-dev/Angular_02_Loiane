import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass']
})
export class DataBindingComponent implements OnInit {

  public msg: string = "SisControle Online";
  public urlIMagem: string = "https://picsum.photos/200/300";

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 7;
  }
}
