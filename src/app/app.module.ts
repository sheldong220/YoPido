import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { menuComponent } from './platos/platos.component';
import { PlatoComponent } from './plato/plato.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { PlatoHijoComponent } from './plato-hijo/plato-hijo.component';
import { CaracteristicasPlatoComponent } from './caracteristicas-plato/caracteristicas-plato.component';
import { InicioComponent } from './inicio/inicio.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { ServicioPlatosService } from './servicio-platos.service';
import { PlatosService } from './platos.service';
import { ModificarPlatoComponent } from './modificar-plato/modificar-plato.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent, canActivate:[LoginGuardian]},
  { path: 'ajustes', component: AjustesComponent, canActivate:[LoginGuardian]},
  { path: 'modificar-plato/:id', component: ModificarPlatoComponent, canActivate:[LoginGuardian]},
  { path: '**', component: ErrorPersonalizadoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    menuComponent,
    PlatoComponent,
    RegistroComponent,
    PlatoHijoComponent,
    CaracteristicasPlatoComponent,
    InicioComponent,
    AjustesComponent,
    ModificarPlatoComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioPlatosService, PlatosService, DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
