import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPlatosService {

  constructor() { }

  muestraMensaje(mensaje: string) {
    alert(mensaje)
  }
}
