import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router,RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  imports: [NgIf, NgFor, FormsModule, RouterModule, RouterLink]
})
export class LoginComponent {
  credentials = { username: '', passwordHash: '' };
errorMessage: any;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/tasks']);
    });
  }
}
