import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../model/services/empresa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empresa } from '../../../model/types/empresa';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[EmpresaService],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss'
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = [];
  search = '';
  page = 1;

  constructor(private service: EmpresaService) {}

  ngOnInit() {
    this.carregarEmpresas();
  }

  carregarEmpresas() {
    this.service.listar(this.search, this.page).subscribe(dados => this.empresas = dados);
  }

  pesquisar() {
    this.page = 1;
    this.carregarEmpresas();
  }

  proximaPagina() {
    this.page++;
    this.carregarEmpresas();
  }

  paginaAnterior() {
    if (this.page > 1) this.page--;
    this.carregarEmpresas();
  }

  remover(id: number) {
    if (confirm('Confirmar remoção?')) {
      this.service.excluir(id).subscribe(() => this.carregarEmpresas());
    }
  }
}
