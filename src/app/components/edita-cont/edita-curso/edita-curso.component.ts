import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CourseService } from '../../../model/services/course.service';
import { Course, CourseLink } from '../../../model/types/course.interface';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-edita-curso',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ImageUploadComponent],
  providers: [CourseService],
  templateUrl: './edita-curso.component.html',
  styleUrls: ['./edita-curso.component.scss']
})
export class EditaCursoComponent {
handleFileSelection($event: File|null,arg1: string) {
throw new Error('Method not implemented.');
}
removeLinkFile(_t57: number) {
throw new Error('Method not implemented.');
}
  @Output() saved = new EventEmitter<void>();

  course: Course = this.getInitialCourseState();
  newLink: CourseLink = { text: '', url: '' };

  errorMessage: string | null = null;
  successMessage: string | null = null;
linkFiles: any;

  constructor(private courseService: CourseService) {}

  private getInitialCourseState(): Course {
    return {
      image: '',
      title: '',
      type: '',
      logo: '',
      links: [],
      inscricaoUrl: '',
      bolsasUrl: '',
      categoria: 'graduacao'
    };
  }

  addLink() {
    if (this.newLink.text?.trim() && this.newLink.url?.trim()) {
      this.course.links.push({ ...this.newLink });
      this.newLink = { text: '', url: '' };
    }
  }

  removeLink(index: number) {
    if (index >= 0 && index < this.course.links.length) {
      this.course.links.splice(index, 1);
    }
  }
// Limpa o formulário e as mensagens de feedback
  resetForm() {
    this.course = this.getInitialCourseState();
    this.errorMessage = null;
    this.successMessage = null;
  }
  
  saveCourse() {
    // 1. Limpa mensagens anteriores
    this.errorMessage = null;
    this.successMessage = null;

    const formData = new FormData();

    // Adiciona campos simples
    formData.append('title', this.course.title ?? '');
    formData.append('type', this.course.type ?? '');
    formData.append('logo', this.course.logo ?? '');
    formData.append('image', this.course.image ?? '');
    formData.append('inscricaoUrl', this.course.inscricaoUrl ?? '');
    formData.append('bolsasUrl', this.course.bolsasUrl ?? '');
    formData.append('categoria', this.course.categoria ?? 'graduacao');

    // Links como JSON (esta parte já estava correta)
    formData.append('links', JSON.stringify(this.course.links ?? []));

    this.courseService.addCourse(formData).subscribe({
      next: (response) => {
        // 2. Exibe mensagem de sucesso
        this.successMessage = 'Curso salvo com sucesso!';
        this.saved.emit();
        
        // 3. Reseta o formulário
        this.course = this.getInitialCourseState();

        // 4. Fecha o modal após um pequeno intervalo para o usuário ver a mensagem
        setTimeout(() => {
          const closeButton = document.getElementById('closeModalButton');
          closeButton?.click();
          this.successMessage = null; // Limpa a mensagem ao fechar
        }, 2000);
      }
    });
  }
}