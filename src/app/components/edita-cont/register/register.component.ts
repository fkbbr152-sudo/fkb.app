import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../model/services/user.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = 'user'; // Role padrão

  constructor(private userService: UserService, private router: Router) {}

  // Método para cadastrar um novo usuário
  register() {
    this.userService.registerUser(this.username, this.password, this.role).subscribe({
      next: (response) => {
        // Exibe SweetAlert2 de sucesso
        Swal.fire({
          title: 'Usuário cadastrado!',
          text: 'O usuário foi cadastrado com sucesso.',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then(() => {
          // Redireciona após a confirmação do alerta
          this.router.navigate(['/admin/user']);
        });
      },
      error: (error) => {
        console.error('Erro ao cadastrar usuário:', error);
        // Exibe SweetAlert2 de erro
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao cadastrar o usuário. Tente novamente.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      },
    });
  }
}
