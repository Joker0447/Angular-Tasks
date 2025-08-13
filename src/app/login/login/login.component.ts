import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginObj: Login = new Login();

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.username === 'admin' && this.loginObj.password === 'admin') {
      // Simulojmë që kemi marrë një token nga serveri
      localStorage.setItem('token', 'fake-jwt-token');
      alert('Login Success! Welcome ' + this.loginObj.username);
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Login failed. Check your username and password.');
    }
  }
}

export class Login {
  username: string = '';
  password: string = '';
}
