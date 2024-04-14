import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioPlatosService } from '../servicio-platos.service';

@Component({
  selector: 'app-caracteristicas-plato',
  templateUrl: './caracteristicas-plato.component.html',
  styleUrls: ['./caracteristicas-plato.component.css']
})
export class CaracteristicasPlatoComponent implements OnInit{

  @Output() caracteristicasPlato = new EventEmitter<string>();

  //constructor(private miServicio:ServicioPlatosService){}

  ngOnInit(): void {
      
  }

  agregaCaracteristicas(value: string){
    //this.miServicio.muestraMensaje(value);
    //this.caracteristicasPlato.emit(value);
  }
  modificarCaracteristicas(value: string){
    
  }

}
