import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

// Modelos e Serviços
import { StaffMember } from './../../../model/types/StaffMember';
import { ContatosService } from '../../../model/services/contatos.service';

@Component({
  selector: 'app-sessao-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessao-contatos.component.html',
  styleUrls: ['./sessao-contatos.component.scss']
})
export class SessaoContatosComponent implements OnInit {

  private allStaff: StaffMember[] = [];
  private isLoading = true;

  private departmentMap: { [key: string]: string } = {
    'diretoria-geral': 'Diretoria Geral',
    'diretoria-executiva': 'Diretoria Executiva',
    'coordenacao': 'Coordenação',
    'secretaria': 'Secretaria',
    'saae': 'SAAE',
    'sti': 'Tecnologia da Informação',
    'marketing': 'Marketing',
    'financeiro': 'Financeiro e Contabilidade',
    'rh': 'Recursos Humanos',
    'biblioteca': 'Biblioteca'
  };

  constructor(private contatosService: ContatosService) {}

  ngOnInit(): void {
    this.contatosService.getContatos().subscribe({
      next: (data) => {
        this.allStaff = Array.isArray(data) ? data : [];
        this.isLoading = false;
        console.log('Contatos carregados:', this.allStaff); // Bom para depuração
      },
      error: (err) => {
        console.error('Erro ao carregar contatos', err);
        this.allStaff = [];
        this.isLoading = false;
      }
    });
  }

  public openAlert(linkType: string): void {
    if (this.isLoading) {
      Swal.fire({ title: 'Carregando...', icon: 'info' });
      return;
    }

    const departmentName = this.departmentMap[linkType];
    let title = departmentName || linkType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    let htmlContent = '';

    if (departmentName) {
      
      // ========================================================================
      // A CORREÇÃO ESTÁ AQUI
      // Normalizamos ambas as strings antes de comparar:
      // .trim() remove espaços em branco no início e no fim.
      // .toLowerCase() converte tudo para minúsculas para a comparação não falhar.
      // ========================================================================
      const filteredStaff = this.allStaff.filter(person => 
        (person.departamento || '').trim().toLowerCase() === departmentName.trim().toLowerCase()
      );

      if (filteredStaff.length > 0) {
        htmlContent = this.formatContactsToHtml(filteredStaff);
      } else {
        htmlContent = '<p>Nenhum contato encontrado para este departamento.</p>';
      }
    } else {
      htmlContent = '<p>Informações não disponíveis no momento.</p>';
      if (linkType === 'ouvidoria') title = 'Ouvidoria';
      if (linkType === 'cape') title = 'CAPE';
    }

    Swal.fire({
      title: `<strong>${title}</strong>`,
      html: htmlContent,
      icon: 'info',
      width: '600px',
      confirmButtonText: 'FECHAR',
      background: '#0A131D',
      color: '#f0f0f0',
      confirmButtonColor: '#007bff'
    });
  }

  private formatContactsToHtml(contacts: StaffMember[]): string {
    // ... seu código para formatar o HTML continua aqui, sem alterações ...
    let html = '<div class="text-white">'; 
    contacts.forEach(person => {
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
        </div>`;
    });
    html += '</div>';
    return html;
  }
}
