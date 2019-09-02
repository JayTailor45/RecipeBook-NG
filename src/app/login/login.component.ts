import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  creds = {
    email: '',
    password: '',
    isLoading: true,
    error: false,
    errorMessage: 'test error message'
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.creds.email,this.creds.password);
  }

  logout() {
    this.authService.logout();
  }

}
