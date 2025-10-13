import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
 public mostrarAvisoManutencao(): void {
    Swal.fire({
      title: "Em manutenção!",
      text: "Logo esse serviço estará disponível.",
      icon: "info"
    });
  }
}
