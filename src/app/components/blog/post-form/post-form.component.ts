import { Component } from '@angular/core';
import { Post } from '../../../model/types/post';
import { PostService } from '../../../model/services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ImageUploadComponent } from '../../edita-cont/image-upload/image-upload.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ImageUploadComponent],
  providers: [PostService],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  post: Post = { username: '', embedCode: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private postService: PostService,
    private sanitizer: DomSanitizer
  ) {}

  // Getter que retorna o HTML sanitizado com segurança para renderização
  get sanitizedEmbedCode(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.post.embedCode);
  }

  onSubmit() {
    if (!this.post.username || !this.post.embedCode) {
      this.errorMessage = 'Todos os campos são obrigatórios.';
      this.successMessage = '';
      return;
    }

    this.postService.addPost(this.post).subscribe({
      next: () => {
        this.successMessage = 'Post adicionado com sucesso!';
        this.errorMessage = '';
        this.post = { username: '', embedCode: '' }; // Limpa o formulário
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = 'Erro ao salvar o post. Verifique o servidor.';
        console.error(err);
      }
    });
  }
}
