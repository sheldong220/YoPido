import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Plato } from "./plato/plato.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient, private loginService: LoginService) { }

    cargarPlatos() {
        const token = this.loginService.getIdToken();
        //return this.httpClient.get('https://yopido-8aea0-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth=' + token);// funciona
        return this.httpClient.get('http://localhost/phpmyadmin/index.php?route=/database/structure&db=yopido' + token);
    }

    guardarPlatos(platos: Plato[]) {//NO SE ME GUARDA EN LA BBDD
        console.log("fervrfeve");
        this.httpClient.put('https://yopido-8aea0-default-rtdb.europe-west1.firebasedatabase.app/datos.json', platos).
            subscribe(
                /*
                    {
                        next: response=>{
                            console.log("Se han guardado los platos: " + response);
                        },
                        error: error=>{
                            console.log("Error: " + error);
                        }
                    }
                */

                response => console.log("Se han guardado los platos: " + response),
                error => console.log("Error: " + error)

            );
    }
    actualizarPlato(indice: number, plato: Plato) {//NO FUNCIONA

        let url = 'https://yopido-8aea0-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.put(url, plato).subscribe(
            {
                next: response => {
                    console.log("Se ha modificado el plato: " + response);
                },
                error: error => {
                    console.log("Error: " + error);
                }
            }
            /*
            response => console.log("Se ha modificado el plato: " + response),
            error => console.log("Error: " + error),
            */
        );
    }
    eliminarPlato(indice: number) {
        let url = 'https://yopido-8aea0-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado el plato: " + response),
            error => console.log("Error: " + error),
        );
    }
}