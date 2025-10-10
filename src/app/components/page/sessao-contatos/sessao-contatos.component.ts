import { StaffMember } from './../../../model/types/StaffMember';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para diretivas como *ngIf
import Swal from 'sweetalert2';

// Importe o serviço e o modelo de dados que criamos
import { ContatosService } from '../../../model/services/contatos.service';

@Component({
  selector: 'app-sessao-contatos',
  standalone: true,
  // Adicione CommonModule aos imports
  imports: [CommonModule],
  providers: [ContatosService],
  templateUrl: './sessao-contatos.component.html',
  styleUrls: ['./sessao-contatos.component.scss']
})
export class SessaoContatosComponent implements OnInit {

  // Array para armazenar todos os contatos carregados do banco de dados
  private allStaff: StaffMember[] = [];
  private isLoading = true; // Para controlar o estado de carregamento

  // Mapeamento dos links do HTML para os nomes dos departamentos no DB
  private departmentMap: { [key: string]: string } = {
    'diretoria-geral': 'Diretoria Geral',
    'diretoria-executiva': 'Diretoria Executiva',
    'coordenacao': 'Coordenação',
    'secretaria': 'Secretaria',
    'saae': 'SAAE',
    'sti': 'Tecnologia da Informação', // Ajuste se o nome no DB for diferente
    'marketing': 'Marketing',
    'financeiro': 'Financeiro e Contabilidade',
    'rh': 'Recursos Humanos',
    'biblioteca': 'Biblioteca' // Exemplo se você adicionar o link da biblioteca
    // 'ouvidoria' e 'cape' não têm dados na nossa tabela, serão tratados abaixo
  };

  // Injetar o serviço de contatos no construtor
  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    // Carrega os dados assim que o componente é iniciado
    this.contatosService.getContatos().subscribe({
      next: (data) => {
        this.allStaff = data;
        this.isLoading = false;
        console.log('Contatos carregados com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao carregar contatos', err);
        this.isLoading = false;
      }
    });
  }

  public openAlert(linkType: string): void {
    // Se os dados ainda estiverem carregando, mostre um alerta de espera
    if (this.isLoading) {
      Swal.fire({
        title: 'Carregando...',
        text: 'Por favor, aguarde enquanto buscamos as informações.',
        icon: 'info',
        background: '#0A131D',
        color: '#f0f0f0'
      });
      return;
    }

    const departmentName = this.departmentMap[linkType];
    let title = departmentName || linkType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    let htmlContent = '';

    if (departmentName) {
      // Filtra os funcionários para o departamento clicado
      const filteredStaff = this.allStaff.filter(
        person => person.departamento === departmentName
      );

      if (filteredStaff.length > 0) {
        // Formata os contatos encontrados em HTML
        htmlContent = this.formatContactsToHtml(filteredStaff);
      } else {
        htmlContent = '<p>Nenhum contato encontrado para este departamento.</p>';
      }
    } else {
      // Caso para links como 'ouvidoria' e 'cape' que não têm dados
      htmlContent = '<p>Informações não disponíveis no momento.</p>';
      if (linkType === 'ouvidoria') title = 'Ouvidoria';
      if (linkType === 'cape') title = 'CAPE';
    }

    Swal.fire({
      title: `<strong>${title}</strong>`,
      html: htmlContent, // Usa a propriedade 'html' em vez de 'text'
      icon: 'info',
      width: '600px',
      confirmButtonText: 'FECHAR',
      // Mantém seu estilo personalizado
      background: '#0A131D',
      color: '#f0f0f0',
      confirmButtonColor: '#007bff'
    });
  }

  /**
   * Função privada para gerar o HTML a partir de uma lista de contatos.
   */
 private formatContactsToHtml(contacts: StaffMember[]): string {
    // Inicia o container. A classe 'text-white' é importante para o tema escuro do seu SweetAlert.
    let html = '<div class="text-white">'; 

    contacts.forEach(person => {
        // Cada 'entry' agora usa Flexbox do Bootstrap e tem uma borda inferior.
        html += `
        <div class="d-flex align-items-center p-3 border-bottom border-secondary">
          
          <div class="flex-shrink-0 me-3">
             <img src="${person.image_url || 'FOTOS_FUN/null.jpg'}" alt="Foto de ${person.nome}"
                  class="rounded-circle border border-2 border-secondary" 
                  style="width: 80px; height: 80px; object-fit: cover;">
          </div>
          
          <div class="flex-grow-1">
            <p class="h5 fw-bold mb-1">${person.nome}</p>
            <p class="fst-italic text-white-50 mb-2">${person.cargo}</p>
            ${person.email ? `<p class="mb-1 small"><strong>Email:</strong> ${person.email}</p>` : ''}
            <p class="mb-0 small">
              ${person.telefone ? `<strong>Fone:</strong> ${person.telefone}` : ''}
              ${person.ramal ? `<span class="ms-2"><strong>Ramal:</strong> ${person.ramal}</span>` : ''}
            </p>
          </div>

        </div>
      `;
    });

    html += '</div>';
    return html;
}
}