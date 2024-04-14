import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioPlatosService } from '../servicio-platos.service';
import { PlatosService } from '../platos.service';
import { Plato } from '../plato/plato.model';

@Component({
  selector: 'app-modificar-plato',
  templateUrl: './modificar-plato.component.html',
  styleUrls: ['./modificar-plato.component.css']
})
export class ModificarPlatoComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private miServicio: ServicioPlatosService, private platosService: PlatosService) { }

  platos: Plato[] = [];

  accion: number;

  ngOnInit(): void {

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.platos = this.platosService.platos;
    this.indice = this.route.snapshot.params['id'];

    let plato: Plato = this.platosService.encontrarPlatos(this.indice);
    this.cuadroNombreComida = plato.nombre;
    this.cuadroIngrediente = plato.ingrediente;
  }

  volverHome() {
    this.router.navigate(['']);
  }
  /*
  actualizarPlato() {
    let plato = new Plato(this.cuadroNombreComida, this.cuadroIngrediente);
    //this.miServicio.muestraMensaje("Nombre del plato: "+ plato.nombre);
    this.platosService.actualizarPlato(this.indice, plato);
    this.router.navigate(['']);
  }

  eliminarPlato() {
    this.platosService.eliminarPlato(this.indice);
    this.router.navigate(['']);
  }
  */

  actualizarPlato() {

    if (this.accion == 1) {
      let plato = new Plato(this.cuadroNombreComida, this.cuadroIngrediente);
      this.platosService.actualizarPlato(this.indice, plato);
      this.router.navigate(['']);
    } else{
      this.platosService.eliminarPlato(this.indice);
      this.router.navigate(['']);
    }
  }
  cuadroNombreComida: string = "";
  cuadroIngrediente: string = "";
  indice: number;
}
