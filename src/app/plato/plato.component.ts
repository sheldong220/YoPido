import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent  implements OnInit{

  nombre="";
  ingrediente="";
  
  
  constructor(){}
  ngOnInit(): void{

  }
}
