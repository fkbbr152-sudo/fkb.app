import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 1. Importe o RouterLink
import { RouterLink } from '@angular/router';
import { DouService } from '../../../model/services/dou.service';
import { DiplomaParaRetirar } from '../../../model/types/diplomas-retirar';
import { NovoNavBarComponent } from '../novo-nav-bar/novo-nav-bar.component';

@Component({
  selector: 'app-diploma-list',
  standalone: true,
  // 2. Adicione RouterLink aos imports
  imports: [CommonModule, FormsModule, RouterLink, NovoNavBarComponent],
  templateUrl: './diploma-list.component.html',
  styleUrls: ['./diploma-list.component.scss']
})
export class DiplomaListComponent implements OnInit {
  // --- Propriedades de Estado ---
  public isLoading = true;
  public error: string | null = null;
  public searchTerm: string = '';

  // --- Listas de Dados ---
  private allDiplomas: DiplomaParaRetirar[] = []; // Guarda todos os diplomas da API
  public filteredDiplomas: DiplomaParaRetirar[] = []; // Guarda os diplomas após a busca
  public paginatedDiplomas: DiplomaParaRetirar[] = []; // A fatia de diplomas para a página atual

  // --- Propriedades de Paginação ---
  public currentPage = 1;
  public itemsPerPage = 15; // Defina quantos itens por página você quer
  public totalPages = 0;

  constructor(private diplomaService: DouService) {}

  ngOnInit(): void {
    this.loadDiplomas();
  }

  loadDiplomas(): void {
    this.isLoading = true;
    this.error = null;
    this.diplomaService.getDiplomasParaRetirar().subscribe({
      next: (data) => {
        this.allDiplomas = data;
        this.filteredDiplomas = data;
        this.updatePage(); // Inicia a paginação
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Não foi possível carregar a lista de diplomas.";
        console.error('Erro ao buscar diplomas:', err);
        this.isLoading = false;
      }
    });
  }

  // Filtra a lista de diplomas com base no termo de busca
  performSearch(): void {
    if (!this.searchTerm) {
      this.filteredDiplomas = this.allDiplomas;
    } else {
      this.filteredDiplomas = this.allDiplomas.filter(diploma =>
        diploma.nome_aluno.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Volta para a primeira página após a busca
    this.updatePage();
  }

  // Calcula e exibe os itens da página atual
  updatePage(): void {
    this.totalPages = Math.ceil(this.filteredDiplomas.length / this.itemsPerPage);
    if (this.totalPages === 0) {
      this.totalPages = 1; // Garante que sempre haja pelo menos 1 página
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDiplomas = this.filteredDiplomas.slice(startIndex, endIndex);
  }

  // Navega para uma página específica
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
    }
  }

  // Funções para os botões de navegação
  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
