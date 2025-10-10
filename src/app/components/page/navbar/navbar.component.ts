import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  openModal(modalType: string): void {
    switch (modalType) {
      case 'cpa':
        Swal.fire({
          title: 'CPA - Comissão Própria de Avaliação',
          text: 'Informações sobre a CPA...',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        break;
      case 'bibliotecaDigital':
        Swal.fire({
          title: 'Biblioteca Digital',
          text: 'Acesse a Biblioteca Digital...',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        break;
      case 'biblioteca':
        Swal.fire({
          title: 'Biblioteca',
          text: 'Informações sobre a Biblioteca...',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        break;
      case 'diplomas':
        Swal.fire({
          title: 'Diplomas',
          text: 'Informações sobre Diplomas...',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        break;
      case 'estagios':
        Swal.fire({
          title: 'Estágios',
          text: 'Informações sobre Estágios...',
          icon: 'info',
          confirmButtonText: 'OK'
        });
        break;
      default:
        Swal.fire({
          title: 'Erro',
          text: 'Modal não encontrado!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        break;
    }
  }
}
