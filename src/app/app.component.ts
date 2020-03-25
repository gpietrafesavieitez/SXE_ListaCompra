import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {AutenticacionService} from './autenticacion.service';
import {FireDBService} from './fire-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.title;

  constructor( public authApp: AutenticacionService,
               public dbApp: FireDBService) {
  }

  login() {
    console.log('login!');
  }
  glogin() {
    console.log('google login!');
  }
  logout() {
    console.log('logout!');
  }
}
