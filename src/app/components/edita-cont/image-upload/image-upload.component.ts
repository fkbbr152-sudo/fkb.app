import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImageService } from '../../../model/services/image.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ImageService],
  templateUrl: './image-upload.component.html', 
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Input() context: 'imagecourse'| 'iconecourse'|'arqcourse'| 'popup' | 'hero' | 'post' = 'popup';

  form: FormGroup;
  selectedFile: File | null = null;
  fileName: string = 'Nenhum arquivo selecionado';
  isDragOver: boolean = false;

  constructor(private fb: FormBuilder, private imageService: ImageService) {
    this.form = this.fb.group({
      image: [null],
    });
  }

  triggerFileInput() {
    const fileInput = document.querySelector('.file-input') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.handleFile(fileInput.files[0]);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
      event.dataTransfer.clearData();
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  private handleFile(file: File) {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      Swal.fire({
        icon: 'warning',
        title: 'Arquivo inválido!',
        text: 'Por favor, selecione um arquivo de imagem válido (JPG, PNG, GIF, SVG).',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      this.selectedFile = null;
      this.fileName = 'Nenhum arquivo selecionado';
      return;
    }
    this.selectedFile = file;
    this.fileName = file.name;
  }

  onSubmit() {
    if (this.selectedFile) {
      this.imageService.addImage(this.selectedFile, this.context).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Imagem enviada!',
            text: response.message,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            // Recarregar a página após a mensagem de sucesso
            window.location.reload();
          });
  
          this.form.reset();
          this.selectedFile = null;
          this.fileName = 'Nenhum arquivo selecionado';
        },
        (error) => {
          console.error('Error:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erro no envio!',
            text: 'Ocorreu um erro ao enviar a imagem.',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Nenhuma imagem selecionada!',
        text: 'Por favor, selecione um arquivo de imagem para enviar.',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  }
  
}
