import { ChangeDetectionStrategy, Component, inject, signal, ViewContainerRef } from '@angular/core';
import { finalize } from 'rxjs';
import { ApiResponse } from '../../../model/types/dou';
import { DouService } from '../../../model/services/dou.service';
import { CommonModule } from '@angular/common';
import { NovoNavBarComponent } from "../novo-nav-bar/novo-nav-bar.component";
import Swal from 'sweetalert2';
import { DiplomaListComponent } from '../diploma-list/diploma-list.component';

@Component({
  selector: 'app-dou',
  standalone: true,
  imports: [CommonModule, NovoNavBarComponent, DiplomaListComponent],
  templateUrl: './dou.component.html',
  styleUrl: './dou.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DouComponent {
  private apiService = inject(DouService);
  // 1. Injetar o ViewContainerRef
  private viewContainerRef = inject(ViewContainerRef);

  showAlert() {
    Swal.fire({
      title: 'Lista de Diplomas', // É bom ter um título
      html: '<div id="diploma-list-container"></div>', // 2. Usar um placeholder
      confirmButtonText: 'OK',
      showCloseButton: true,
      width: '40vw', // Um pouco mais largo para acomodar uma lista

      didOpen: () => {
        // 3. Executar quando o modal abrir
        const container = document.getElementById('diploma-list-container');
        if (container) {
          // Limpa qualquer componente anterior
          this.viewContainerRef.clear();

          // 4. Criar a instância do componente
          const componentRef = this.viewContainerRef.createComponent(DiplomaListComponent);

          // 6. Anexar o componente ao DOM do modal
          container.appendChild(componentRef.location.nativeElement);
        }
      },
      willClose: () => {
        // 7. Destruir o componente quando o modal fechar (evita memory leak)
        this.viewContainerRef.clear();
      }
    });
  }

  // Sinais para gerenciar o estado do componente
  cpfInput = signal(''); // Sinal para o valor do input CPF
  apiResponse = signal<ApiResponse | null>(null); // Sinal para armazenar a resposta da API
  loading = signal(false); // Sinal para indicar carregamento
  error = signal<string | null>(null); // Sinal para mensagens de erro

  /**
  * Atualiza o sinal cpfInput conforme o usuário digita.
  * @param event O evento de input do campo CPF.
  */
  onCpfInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.cpfInput.set(input.value);
  }

  /**
  * Chamado quando o formulário de busca é submetido.
  */
  onSearch(): void {
    const rawCpf = this.cpfInput(); // Pega o valor atual do input
    if (!rawCpf) {
      this.error.set('Por favor, digite um CPF.');
      return;
    }

    // Limpa estados anteriores e ativa o loading
    this.loading.set(true);
    this.error.set(null);
    this.apiResponse.set(null);

    // Remove caracteres não numéricos do CPF
    const formattedCpf = rawCpf.replace(/\D/g, '');

    // Chama o serviço para buscar os dados
    this.apiService.searchDiplomasByCpf(formattedCpf).pipe(
      finalize(() => this.loading.set(false)) // Garante que o loading seja desativado ao final
    ).subscribe({
      next: (data) => {
        // Sucesso: atualiza o sinal com a resposta
        this.apiResponse.set(data);
        // Verifica se vieram diplomas, mesmo que o aluno tenha sido encontrado
        if (!data.diplomas || data.diplomas.length === 0) {
          // Define um erro específico se não houver diplomas
          this.error.set('Nenhum diploma encontrado para este aluno.');
          // Limpa os dados do aluno para não exibir o nome/cpf sem diplomas
          this.apiResponse.update(current => current ? { ...current, student: null } : null);
        } else {
          // **SUGESTÃO**: Talvez você queira chamar o modal aqui, em vez de um botão
          // this.showAlert(); 
          // (E aí você usaria o passo 5 para passar os dados)
        }
      },
      error: (err: Error) => {
        // Erro: atualiza o sinal de erro com a mensagem tratada pelo serviço
        this.error.set(err.message);
        this.apiResponse.set({ student: null, diplomas: [] }); // Limpa a resposta em caso de erro
      }
    });
  }
}

