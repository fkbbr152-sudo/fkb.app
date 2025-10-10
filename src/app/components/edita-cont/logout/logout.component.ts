import { Component } from '@angular/core';
import { AuthService } from '../../../model/services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  providers:[AuthService],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout(); // Chama o logout do AuthService
  }
}
