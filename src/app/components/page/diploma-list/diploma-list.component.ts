import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Diploma } from '../../../model/types/diplomas';

@Component({
  selector: 'app-diploma-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diploma-list.component.html',
  styleUrl: './diploma-list.component.scss'
})
export class DiplomaListComponent implements OnInit {
  // Termo de busca do input
  public searchTerm: string = '';
  // Resultados da busca
  public searchResults: Diploma[] = [];
  // ID do painel do acordeão que está aberto
  public activeAccordionPanel: string | null = '1c'; // Inicia com o primeiro painel aberto

  // Dados mocados para simular o banco de dados
  private allDiplomas: Diploma[] = [
    { id: 101, nome: 'Ana Carolina de Souza', curso: 'Direito' },
    { id: 102, nome: 'Bruno Alves', curso: 'Direito' },
    { id: 201, nome: 'Carlos Eduardo Ferreira', curso: 'Administração' },
    { id: 202, nome: 'Daniela Ribeiro', curso: 'Administração' },
    { id: 301, nome: 'Eduardo Lima', curso: 'Ed. Física - Bacharelado' },
    { id: 401, nome: 'Fernanda Costa', curso: 'Ed. Física - Licenciatura' },
    { id: 501, nome: 'Gabriel Martins', curso: 'Ciências Biológicas - Licenciatura' },
    { id: 601, nome: 'Helena Rocha', curso: 'Relações Públicas' },
    { id: 701, nome: 'Igor Santos', curso: 'Logística' },
  ];

  // Estrutura de cursos para o acordeão
  public courses = [
    { id: '1c', title: 'DIREITO', diplomas: [] as Diploma[] },
    { id: 'collapseTwo', title: 'ADMINISTRAÇÃO', diplomas: [] as Diploma[] },
    { id: '4C', title: 'ED. FÍSICA - LICENCIATURA', diplomas: [] as Diploma[] },
    { id: 'collapseThree', title: 'ED. FÍSICA - BACHARELADO', diplomas: [] as Diploma[] },
    { id: '5C', title: 'CIÊNCIAS BIOLÓGICAS - LICENCIATURA', diplomas: [] as Diploma[] },
    { id: '6C', title: 'RELAÇÕES PÚBLICAS - PUBLICIDADE E PROPAGANDA', diplomas: [] as Diploma[] },
    { id: '7C', title: 'LOGÍSTICA - GESTÃO FINANCEIRA - GESTÃO COMERCIAL', diplomas: [] as Diploma[] }
  ];

  ngOnInit(): void {
    // Preenche os diplomas nos cursos correspondentes
    this.courses.forEach(course => {
      switch (course.title) {
        case 'DIREITO':
          course.diplomas = this.allDiplomas.filter(d => d.curso === 'Direito');
          break;
        case 'ADMINISTRAÇÃO':
          course.diplomas = this.allDiplomas.filter(d => d.curso === 'Administração');
          break;
        case 'ED. FÍSICA - BACHARELADO':
          course.diplomas = this.allDiplomas.filter(d => d.curso === 'Ed. Física - Bacharelado');
          break;
        case 'ED. FÍSICA - LICENCIATURA':
            course.diplomas = this.allDiplomas.filter(d => d.curso === 'Ed. Física - Licenciatura');
            break;
        case 'CIÊNCIAS BIOLÓGICAS - LICENCIATURA':
            course.diplomas = this.allDiplomas.filter(d => d.curso === 'Ciências Biológicas - Licenciatura');
            break;
        case 'RELAÇÕES PÚBLICAS - PUBLICIDADE E PROPAGANDA':
            course.diplomas = this.allDiplomas.filter(d => d.curso === 'Relações Públicas');
            break;
        case 'LOGÍSTICA - GESTÃO FINANCEIRA - GESTÃO COMERCIAL':
            course.diplomas = this.allDiplomas.filter(d => d.curso === 'Logística');
            break;
      }
    });
  }

  // Função para realizar a busca
  performSearch(): void {
    if (!this.searchTerm) {
      this.searchResults = [];
      return;
    }
    this.searchResults = this.allDiplomas.filter(diploma =>
      diploma.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Função para controlar a exibição do acordeão
  toggleAccordion(panelId: string): void {
    this.activeAccordionPanel = this.activeAccordionPanel === panelId ? null : panelId;
  }
}


