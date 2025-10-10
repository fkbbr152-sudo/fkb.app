import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../model/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; // Importa o SweetAlert2

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.listUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.error('Erro ao carregar usuários:', error);
      },
    });
  }

 editUser(user: any) {
  Swal.fire({
    title: 'Editar Usuário',
    html:
      `<input id="swal-input-username" class="swal2-input" placeholder="Nome de usuário" value="${user.username}">` +
      `<input id="swal-input-password" type="password" class="swal2-input" placeholder="Nova senha (opcional)">`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Salvar',
    cancelButtonText: 'Cancelar',
    preConfirm: () => {
      const username = (document.getElementById('swal-input-username') as HTMLInputElement).value;
      const password = (document.getElementById('swal-input-password') as HTMLInputElement).value;

      if (!username) {
        Swal.showValidationMessage('O nome de usuário é obrigatório!');
        return;
      }

      return { username, password };
    }
  }).then((result) => {
    if (result.isConfirmed && result.value) {
      const { username, password } = result.value;

      this.userService.editUser(user.id, username, user.role, password).subscribe({
        next: () => {
          Swal.fire('Usuário atualizado!', '', 'success');
          this.loadUsers();
        },
        error: (error) => {
          Swal.fire('Erro!', 'Não foi possível atualizar o usuário.', 'error');
          console.error('Erro ao atualizar usuário:', error);
        }
      });
    }
  });
}



  // Função para excluir um usuário
  deleteUser(id: number) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Chama o método de exclusão no serviço
        this.userService.deleteUser(id).subscribe({
          next: (response) => {
            Swal.fire('Usuário excluído!', '', 'success');
            this.loadUsers(); // Recarrega a lista de usuários
          },
          error: (error) => {
            Swal.fire('Erro!', 'Não foi possível excluir o usuário.', 'error');
            console.error('Erro ao excluir usuário:', error);
          }
        });
      }
    });
  }
}
