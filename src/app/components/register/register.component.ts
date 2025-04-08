import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router , RouterLink} from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  // standalone: true, // ✅ Standalone component
  templateUrl: './register.component.html',
  standalone : true,
  imports: [NgIf, NgFor, FormsModule]
})
export class RegisterComponent {
  user = { username: '', passwordHash: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}

