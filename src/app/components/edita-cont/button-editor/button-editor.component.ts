import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../../../model/services/button.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-button-editor',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [ButtonService],
  templateUrl: './button-editor.component.html',
  styleUrl: './button-editor.component.scss'
})
export class ButtonEditorComponent implements OnInit {
  buttons: any[] = [];
  selectedFile: File | null = null;

  constructor(private buttonService: ButtonService) { }

  ngOnInit(): void {
    this.loadButtons();
  }

loadButtons(): void {
  this.buttonService.getButtons().subscribe(data => {
    const safeData = Array.isArray(data) ? data : [];
    this.buttons = safeData.map(b => ({
      ...b,
      visible: b.visible !== undefined ? !!b.visible : true
    }));
  });
}


  openAddDialog(): void {
    Swal.fire({
      title: 'Adicionar Novo Botão',
      html: this.generateSwalHtml(),
      didOpen: () => this.attachSwalTypeListener(),
      preConfirm: async () => this.getSwalInputValues(),
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const formData = this.buildFormData(result.value);
        this.buttonService.addButton(formData).subscribe(() => {
          this.loadButtons();
          Swal.fire('Sucesso!', 'Botão adicionado com sucesso', 'success');
        });
      }
    });
  }

  openEditDialog(button: any): void {
    Swal.fire({
      title: 'Editar Botão',
      html: this.generateSwalHtml(button),
      didOpen: () => this.attachSwalTypeListener(button),
      preConfirm: async () => this.getSwalInputValues(button.id),
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const formData = this.buildFormData(result.value, true); // true = é update
        this.buttonService.updateButton(formData).subscribe(() => {
          this.loadButtons();
          Swal.fire('Atualizado!', 'Botão atualizado com sucesso', 'success');
        });
      }
    });
  }

  confirmDelete(id: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.buttonService.deleteButton(id).subscribe(() => {
          this.loadButtons();
          Swal.fire('Excluído!', 'O botão foi removido', 'success');
        });
      }
    });
  }

  toggleVisibility(button: any): void {
    const newVisible = !button.visible;
    this.buttonService.updateButtonVisibility(button.id, newVisible).subscribe({
      next: () => { button.visible = newVisible; },
      error: () => { Swal.fire('Erro!', 'Erro ao atualizar visibilidade', 'error'); }
    });
  }

  // Helpers

  private generateSwalHtml(button?: any): string {
    const text = button ? button.text : '';
    const type = button ? (button.link.endsWith('.pdf') ? 'pdf' : 'link') : 'link';
    const link = button && type === 'link' ? button.link : '';
    const visibleChecked = button && !button.visible ? '' : 'checked';

    return `
      <input id="swal-text" class="swal2-input" placeholder="Texto do botão" value="${text}">
      <select id="swal-type" class="swal2-select">
        <option value="link" ${type === 'link' ? 'selected' : ''}>Link</option>
        <option value="pdf" ${type === 'pdf' ? 'selected' : ''}>PDF</option>
      </select>
      <div id="link-container" style="margin-top:6px;${type === 'pdf' ? 'display:none;' : ''}">
        <input id="swal-link" class="swal2-input" placeholder="Cole o link" value="${link}">
      </div>
      <div id="pdf-container" style="margin-top:6px;${type === 'link' ? 'display:none;' : ''}">
        <input type="file" id="swal-pdf" class="swal2-input" accept=".pdf">
        ${button && type === 'pdf' ? `<small>Arquivo atual: ${button.link}</small>` : ''}
      </div>
      <label style="display:block;margin-top:8px;">
        <input type="checkbox" id="swal-visible" ${visibleChecked}> Exibir botão na lista
      </label>
    `;
  }

  private attachSwalTypeListener(button?: any): void {
    const typeSelect = document.getElementById('swal-type') as HTMLSelectElement;
    typeSelect.addEventListener('change', () => {
      const linkContainer = document.getElementById('link-container')!;
      const pdfContainer = document.getElementById('pdf-container')!;
      if (typeSelect.value === 'pdf') {
        linkContainer.style.display = 'none';
        pdfContainer.style.display = 'block';
      } else {
        linkContainer.style.display = 'block';
        pdfContainer.style.display = 'none';
      }
    });
  }

  private async getSwalInputValues(id?: number): Promise<any | false> {
    const text = (document.getElementById('swal-text') as HTMLInputElement).value;
    const type = (document.getElementById('swal-type') as HTMLSelectElement).value;
    const linkInput = document.getElementById('swal-link') as HTMLInputElement;
    const fileInput = document.getElementById('swal-pdf') as HTMLInputElement;
    const visibleCheckbox = document.getElementById('swal-visible') as HTMLInputElement;

    if (!text.trim()) {
      Swal.showValidationMessage('O texto do botão é obrigatório');
      return false;
    }

    if (type === 'pdf' && (!fileInput.files || fileInput.files.length === 0) && !id) {
      // No ADD exige PDF novo; no EDIT pode manter o existente
      Swal.showValidationMessage('Selecione um arquivo PDF');
      return false;
    }

    return {
      id,
      text,
      type,
      link: linkInput.value,
      file: fileInput.files?.[0] ?? null,
      visible: visibleCheckbox.checked
    };
  }

  private buildFormData(data: any, isUpdate: boolean = false): FormData {
    const formData = new FormData();
    if (isUpdate) {
      formData.append('id', data.id.toString());
    }
    formData.append('text', data.text);
    formData.append('visible', data.visible ? '1' : '0');

    if (data.type === 'pdf') {
      if (data.file) {
        formData.append('file', data.file); // << CORRIGIDO aqui
      }
    } else {
      formData.append('link', data.link);
    }

    return formData;
  }
}
