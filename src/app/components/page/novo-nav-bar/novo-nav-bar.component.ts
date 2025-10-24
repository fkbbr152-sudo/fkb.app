import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

// Interface para os links existentes
interface LinkItem {
  num: number;
  desc: string;
  link: string;
}

// Novas interfaces para a estrutura dos documentos de estágio
interface DocumentoEstagio {
  titulo: string;
  url: string;
}

interface CursoEstagio {
  curso: string;
  documentos: DocumentoEstagio[];
}

// Tipo para os itens do accordion, que podem ser de diferentes formatos
type AccordionContent = (string | LinkItem)[] | CursoEstagio[];


@Component({
  selector: 'app-novo-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novo-nav-bar.component.html',
  styleUrl: './novo-nav-bar.component.scss'
})
export class NovoNavBarComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  showAlert(opcao: string): void {
    Swal.fire({
      title: opcao,
      text: `Você clicou em ${opcao}`,
      icon: 'info',
      confirmButtonText: 'OK',
    });
  }

  abrirMenu(): void {
    const dados = this.getCombinedPortalData(); // Usa os dados combinados
    this.exibirAccordionModal('Menu de Acesso', dados, `<a href="https://portais.qualinfonet.com.br/fkb/" target="_blank" style="text-decoration:none;color: #f0f0f0;">Acesso ao Portal</a>`);
  }

  abrirBiblioteca(): void {
    const dados = this.getDadosBiblioteca();
    this.exibirAccordionModal('Biblioteca Padre Lambert Prins', { 'BIBLIOTECA': dados['BIBLIOTECA'] }, 'Sair');
  }

  // 🔧 Use este método se quiser rolar até um ID com segurança
  scrollToElement(id: string): void {
    if (!id || id.trim() === '' || id === '#') {
      console.warn('ID inválido passado para scrollToElement:', id);
      return;
    }

    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Elemento com ID ${id} não encontrado.`);
    }
  }

  private getCombinedPortalData(): Record<string, AccordionContent> {
    // Começa com os dados do portal
    const combinedData: Record<string, AccordionContent> = {
        ...this.getDadosPortal()
    };
    
    // Adiciona uma única entrada "ESTÁGIOS" contendo a lista de cursos
    combinedData['ESTÁGIOS'] = this.getDadosEstagios();
    
    return combinedData;
  }

  private getDadosPortal(): Record<string, (string | LinkItem)[]> {
    return {
      'PORTAL DE ACESSO': [
        { num: 1, desc: 'Comunicado Acadêmico - Certificados', link: 'arquivos/Comunicado Academico 09-24 Alunos Certificados.pdf' },
        { num: 2, desc: 'Comunicado Avaliações', link: 'arquivos/Comunicado de notas.pdf' },
        { num: 3, desc: 'Requerer LOGIN e SENHA', link: 'arquivos/Documentos _PORTAL_DE_ACESSO/Comunicado acesso ao portal do aluno.pdf' },
        { num: 4, desc: 'Comunicado e Portarias para rematrícula', link: 'arquivos/PortariaRematricula.pdf' },
        { num: 5, desc: 'Passo a Passo para Rematrícula', link: 'arquivos/instruções para a rematricula.pdf' },
        { num: 6, desc: 'Tutorial em vídeo para Rematrícula', link: '#tutorial' },
        { num: 7, desc: 'Requerimento para Rematrícula - Troca de avalista', link: 'arquivos/transferir.pdf' },
        { num: 8, desc: 'Requerimento para Matrícula', link: 'arquivos/Documentos _PORTAL_DE_ACESSO/Req. Matrícula 1º2025.pdf' },
        { num: 9, desc: 'Requerimento para Rematrícula', link: 'arquivos/Req. Rematrícula 2º2025.pdf' },
        { num: 10, desc: 'Relátorio de Atividades Complementares', link: 'arquivos/Documentos _PORTAL_DE_ACESSO/AC-FORM.doc' },
        { num: 11, desc: 'Capa de Atividades Complementares', link: 'arquivos/Documentos _PORTAL_DE_ACESSO/CAPA ATIVIDADE COMPLEMENTAR  2024.pdf' },
        { num: 12, desc: 'Modelo banner', link: 'arquivos/Documentos _PORTAL_DE_ACESSO/modelo banner fkb.pdf' },
      ],
      'CPA': [
        { num: 1, desc: 'Comissão CPA', link: 'arquivos/biblioteca/doc_CPA/comissão CPA.pdf' },
        { num: 2, desc: 'Regimento CPA-FKB', link: 'arquivos/biblioteca/doc_CPA/1 Regimento CPA FKB.pdf' },
        { num: 3, desc: 'Portarias de Nomeação CPA-FKB', link: 'arquivos/biblioteca/doc_CPA/Portaria_CPA.pdf' },
        { num: 4, desc: 'Estatuto da FKB', link: 'arquivos/biblioteca/doc_CPA/3. Estatuto FKB  2019.pdf' },
        { num: 5, desc: 'Lei nº 10.861/2004\nSistema Nacional de Avaliação\nda Educação Superior (Sinaes)', link: 'arquivos/biblioteca/doc_CPA/4. Lei SINAES nº 10.861-2004.pdf' },
      ],
      'DIPLOMAS': [{num: 1, desc: 'Consultar diplomas', link: '/diploma'}],
    };
  }

  private getDadosBiblioteca(): Record<string, LinkItem[]> {
    return {
      'BIBLIOTECA': [
        { num: 1, desc: 'Patrono da Biblioteca (Padre Lambert Prins)', link: 'arquivos/biblioteca/Patrono da Biblioteca FKB Padre Lambert Prins.pdf' },
        { num: 2, desc: 'Certificado Conselho Federal de Biblioteconomia 8ª Região (CRB-8)', link: 'arquivos/biblioteca/Certificado CRB Biblioteca.pdf' },
        { num: 3, desc: 'Ficha Catalográfica', link: 'arquivos/biblioteca/Ficha Catalográfica - BIBLIOTECA FKB.pdf' },
        { num: 4, desc: 'Orientações para Normas da ABNT.', link: 'arquivos/biblioteca/Normas para Elaboração de Trabalhos Acadêmicos.pdf' },
        { num: 5, desc: 'Bases de dados com acesso gratuito.', link: 'arquivos/biblioteca/Bases de dados on line -manter os links.pdf' },
        { num: 6, desc: 'COMUNICADO GERAL 2023.', link: 'arquivos/biblioteca/COMUNICADO GERAL 2023.pdf' },
        { num: 7, desc: 'Manual Biblioteca Digital', link: 'arquivos/biblioteca/Manual Biblioteca Digital.pdf' },
        { num: 8, desc: 'Requerer LOGIN e SENHA', link: 'arquivos/biblioteca/COMUNICADO BIBLIOTECA VIRTUAL.pdf' }
      ]
    };
  }

  private getDadosEstagios(): CursoEstagio[] {
    return [
      {
        "curso": "Lista de Documentos dos Cursos de Ed.Física/Ciências Biológicas",
        "documentos": [
          { "titulo": "✓ Acordo de Cooperação - alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Acordo de cooperação FKB 23-07-2025.doc" },
          { "titulo": "✓ Convênio Unidade Concedente Modelo 1 - alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Convênio FKB 23-07-2025.doc" },
          { "titulo": "✓ Autorização de estágio- Licenciatura - alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Autorização de Estágio Licenciatura 28-07-2025.doc" },
          { "titulo": "✓ Ficha de Acompanhamento, Registro e  Ficha de Avaliação. - alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Ficha de Acompanhamento, Registro e Ficha de Avaliação 28-07-2025.doc" },
          { "titulo": "✓ Formulário de frequência- licenciatura - alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Formulário de frequencia- licenciatura 28-07-2025.doc" },
          { "titulo": "✓ Programa das Atividades do Estágio alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Programa de atividades-Licenciatura 28-07-2025.doc" },
          { "titulo": "✓ Relatório Mensal de Estágio alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Relatório mensal 28-07-2025.doc" },
          { "titulo": "✓ Termo de Compromisso Geral", "url": "arquivos/Documentos de Estágio/Termo de compromisso.docx" },
          { "titulo": "✓ Termo de Compromisso Licenciatura e Bacharelado alterado em 06/08/2025", "url": "arquivos/Documentos de Estágio/Termo de compromisso-Licenciatura 28-07-2025.doc" }
        ]
      },
      {
        "curso": "Lista de Documentos do Curso de Administração",
        "documentos": [
          { "titulo": "✓ Acordo de Cooperação", "url": "arquivos/Documentos de Estágio/4 - Acordo de cooperação.docx" },
          { "titulo": "✓ Convênio Unidade Concedente Modelo 1", "url": "arquivos/Documentos de Estágio/ADM e CST/Convênio Unidade Concedente Modelo 1.doc" },
          { "titulo": "✓ Programa das Atividades do Estágio", "url": "arquivos/Documentos de Estágio/ADM e CST/Programa das Atividades de Estágio.doc" },
          { "titulo": "✓ Relatório Mensal de Estágio", "url": "arquivos/Documentos de Estágio/ADM e CST/Relatório Mensal de Estágio.docx" },
          { "titulo": "✓ Termo de Compromisso Geral", "url": "arquivos/Documentos de Estágio/Termo de Compromisso Geral.doc" }
        ]
      },
      {
        "curso": "Lista de Documentos do Curso de Direito",
        "documentos": [
          { "titulo": "✓ Acordo de Cooperação", "url": "arquivos/Documentos de Estágio/4 - Acordo de cooperação.docx" },
          { "titulo": "✓ Convênio Unidade Concedente Modelo 1", "url": "arquivos/Documentos de Estágio/3 - Convênio.docx" },
          { "titulo": "✓ Relatório de Autos Findos", "url": "arquivos/Documentos de Estágio/direito/RELATÓRIO DE AUTOS FINDOS.docx" },
          { "titulo": "✓ Relatório de Sessão do Tribunal de Júri", "url": "arquivos/Documentos de Estágio/direito/RELATÓRIO DE SESSÃO DO TRIBUNAL DO JÚRI.docx" },
          { "titulo": "✓ Termo de Compromisso Geral", "url": "arquivos/Documentos de Estágio/Termo de Compromisso Geral.doc" },
          { "titulo": "✓ Relatório de Visitas", "url": "arquivos/Documentos de Estágio/direito/RELATÓRIO DE VISITAS.docx" }
        ]
      }
    ];
  }

  private exibirAccordionModal(titulo: string, dados: Record<string, AccordionContent>, confirma?: string): void {
    const accordionHtml = Object.entries(dados).map(([secao, itens], index) => {
      let bodyContent = '';

      // Lógica especial para a seção "ESTÁGIOS"
      if (secao === 'ESTÁGIOS') {
        const cursos = itens as CursoEstagio[];
        const nestedAccordionHtml = cursos.map((cursoItem, nestedIndex) => {
          const rows = cursoItem.documentos.map(doc => `
            <tr>
              <td class="align-middle text-start">${doc.titulo}</td>
              <td class="text-end" style="width: 1%;"><a class="btn btn-primary" href="${doc.url}" target="_blank"><i class="fa-solid fa-file-arrow-down"></i></a></td>
            </tr>
          `).join('');

          return `
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNested${index}_${nestedIndex}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseNested${index}_${nestedIndex}" aria-expanded="false" aria-controls="collapseNested${index}_${nestedIndex}">
                  ${cursoItem.curso}
                </button>
              </h2>
              <div id="collapseNested${index}_${nestedIndex}" class="accordion-collapse collapse" aria-labelledby="headingNested${index}_${nestedIndex}">
                <div class="accordion-body p-0">
                  <div class="table-responsive">
                    <table class="table table-striped table-hover mb-0">
                      <tbody>${rows}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>`;
        }).join('');
        // O corpo da seção "ESTÁGIOS" é o próprio acordeão aninhado
        bodyContent = `<div class="accordion" id="nestedAccordion_${index}">${nestedAccordionHtml}</div>`;
      } 
      // Lógica para as outras seções (tabelas de links ou listas simples)
      else if (itens.length > 0 && typeof itens[0] === 'object') {
        const rows = (itens as LinkItem[]).map(item => `
          <tr>
            <th scope="row" class="align-middle">${item.num}</th>
            <td class="align-middle text-start">✓ ${item.desc}</td>
            <td style="width: 1%;"><a class="btn btn-primary" href="${item.link}" target="_blank"><i class="fa-solid fa-file-arrow-down"></i></a></td>
          </tr>
        `).join('');

        bodyContent = `
          <div class="table-responsive">
            <table class="table table-striped table-hover mb-0">
              <tbody>${rows}</tbody>
            </table>
          </div>`;
      } else {
        const listItems = (itens as string[]).map(text => `<li>${text}</li>`).join('');
        bodyContent = `<ul>${listItems}</ul>`;
      }

      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              ${secao}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">
            <div class="accordion-body ${secao === 'ESTÁGIOS' ? 'p-0' : ''}">${bodyContent}</div>
          </div>
        </div>`;
    }).join('');

    Swal.fire({
      title: titulo,
      html: `<div class="accordion" id="accordionExample">${accordionHtml}</div>`,
      showCloseButton: true,
      showDenyButton: false,
      confirmButtonText: confirma,
      customClass: {
        popup: 'swal2-custom-width'
      },
    });
  }
}

