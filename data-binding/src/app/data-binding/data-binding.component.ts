import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  public url: string = "app.siscontrole.com";
  public img: string = "https://picsum.photos/200/300";

  constructor() { }

  ngOnInit(): void {
  }

}
