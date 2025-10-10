import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../model/services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          const roleRoutes: { [key: string]: string } = {
            admin: '/admin',
            user: '/collaborator',
          };
        
          const route = roleRoutes[response.role];
          if (route) {
            console.log(`Redirecionando para ${route}`);
            this.router.navigate([route]);
          } else {
            this.errorMessage = 'Role inválido';
          }
        } else {
          console.log('Falha no login:', response.error);
          this.errorMessage = response.error; // Mostra mensagem de erro
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
        this.errorMessage = 'Erro ao fazer login. Tente novamente.';
      }
    );
  }
}
