import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo: string = 'menuInteractivoLocales';
  constructor(private loginService:LoginService) {

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDNmWbtugKl7191PfbMQMABTIT7ReWT3ko",
      authDomain: "yopido-8aea0-1b337.firebaseapp.com"
    });
  }
  estaLogueado(){
    return this.loginService.estaLogueado();
  }
  logout(){
    this.loginService.logout();
  }
}
