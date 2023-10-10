import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication-service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {}
  signUp(email: HTMLInputElement, password: HTMLInputElement) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        // Hacer algo aquí
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  
}