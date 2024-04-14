import { Component, Input, OnInit } from '@angular/core';
import { Plato } from '../plato/plato.model';

@Component({
  selector: 'app-plato-hijo',
  templateUrl: './plato-hijo.component.html',
  styleUrls: ['./plato-hijo.component.css']
})
export class PlatoHijoComponent implements OnInit{
  
  @Input() platoDeLista:Plato;

  @Input() indice:number;
  
  constructor(){}
  ngOnInit(): void{

  }
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
