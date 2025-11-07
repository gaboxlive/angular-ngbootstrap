import { Component, inject } from '@angular/core';
import { LoginService } from '../../api/login.service';
import { LoginRequest } from '../../interfaces/LoginRequest';
import { AppStore } from '../../state/appStore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginService = inject(LoginService);
  appStore = inject(AppStore);
  router = inject(Router);
  login = () => {
    const request: LoginRequest = {
      email: 'gacg30@hotmail.com',
      password: '12345678',
    };
    this.loginService.login(request).subscribe({
      next: (response) => {
        this.appStore.setIsLogged(true, 'Gabriel Cruz', request.email);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.warn(error);
      },
    });
  };
}
