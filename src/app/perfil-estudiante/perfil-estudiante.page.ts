import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication-service';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {
  constructor(
    public authService: AuthenticationService
  ) { }
  ngOnInit() {
  }
}