import { Component, OnInit } from '@angular/core';
import { Plato } from '../plato/plato.model';
import { ServicioPlatosService } from '../servicio-platos.service';
import { PlatosService } from '../platos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  titulo = 'Listado de platos';

  constructor(private miServicio: ServicioPlatosService, private platosService: PlatosService) {
    //this.platos=this.platosService.platos;
  }
  ngOnInit(): void {
    //this.platos = this.platosService.platos;//para cargar los platos del array
    this.platosService.obtenerPlatos().subscribe(misPlatos=>{
      console.log(misPlatos);
      this.platos=Object.values(misPlatos);
      this.platosService.setPlatos(this.platos);
    });//para ver cualquier modificacion en los datos
  }

  platos: Plato[] = [];//aqui se almacenan los platos cargados

  agregarPlato() {
    let plato = new Plato(this.cuadroNombreComida, this.cuadroIngrediente);
    //this.miServicio.muestraMensaje("Nombre del plato: "+ plato.nombre);
    this.platosService.agregarPlatoServicio(plato);
  }

  cuadroNombreComida: string = "";
  cuadroIngrediente: string = "";
}
