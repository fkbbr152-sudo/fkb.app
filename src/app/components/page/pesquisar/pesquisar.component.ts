import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesquisar',
  standalone: true,
  imports: [],
  templateUrl: './pesquisar.component.html',
  styleUrl: './pesquisar.component.scss'
})
export class PesquisarComponent {
 public mostrarAvisoManutencao(): void {
    Swal.fire({
      title: "Em manutenção!",
      text: "Logo esse serviço estará disponível.",
      icon: "info"
    });
  }
}
