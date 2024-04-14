import { Injectable } from "@angular/core";
import { Plato } from "./plato/plato.model";
import { ServicioPlatosService } from "./servicio-platos.service";
import { DataServices } from "./data.services";

@Injectable()
export class PlatosService {
    constructor(private servicioVentanaEmergente: ServicioPlatosService, private dataService: DataServices) {

    }

    setPlatos(misPlatos:Plato[]){
        this.platos=misPlatos;
    }

    obtenerPlatos() {
        return this.dataService.cargarPlatos();
    }
    platos: Plato[] = [];//por si hago pruebas algun dia
    /*
    platos: Plato[] = [
        new Plato("Macarrones", "Pasta"),
        new Plato("Sopa", "Judias")
    ];
    */
    agregarPlatoServicio(plato: Plato) {
        console.log("vfeevfv");
        this.platos.push(plato);
        this.dataService.guardarPlatos(this.platos);
    }
    encontrarPlatos(indice: number) {
        let plato: Plato = this.platos[indice];
        return plato;
    }
    actualizarPlato(indice:number, plato:Plato) {
        let platoModificado = this.platos[indice];

        platoModificado.nombre = plato.nombre;
        platoModificado.ingrediente = plato.ingrediente;

        this.dataService.actualizarPlato(indice, plato);
    }
    eliminarPlato(indice: number) {
        this.platos.splice(indice, 1);
        //PARA BORRAR EL PLATO DE LA BBDD:
        this.dataService.eliminarPlato(indice);
        if(this.platos!=null){
            this.dataService.guardarPlatos(this.platos);
        }
    }
}