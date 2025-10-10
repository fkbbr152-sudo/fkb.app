import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../../model/services/image.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { API_ENDPOINTS } from '../../../model/core/config/api-endpoints';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  providers: [ImageService],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  @Input() context: 'popup' | 'hero' | 'post' = 'popup'; // Define o uso do componente
  @Input() fetchAll: boolean = false; // novo input para definir se busca uma ou todas
  images: any[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.loadImages();
  }

loadImages() {
  const fetch$ = this.fetchAll
    ? this.imageService.getAllImagesByCategory(this.context)
    : this.imageService.getLatestImage(this.context);

  fetch$.subscribe(data => {
    const images = Array.isArray(data) ? data : [data]; // garante array sempre

    this.images = images.map(image => ({
      ...image,
      path: this.normalizeImagePath(image.path)
    }));
  });
}
  
  deleteImage(id: number) {
    this.imageService.deleteImage(id).subscribe(response => {
      // Exibe o alerta com temporizador
      Swal.fire({
        icon: 'success',
        title: 'Imagem excluída!',
        text: response.message,
        timer: 2000, // Tempo de 2 segundos
        timerProgressBar: true,
        showConfirmButton: false
      });

      this.loadImages();
    });
  }

  private normalizeImagePath(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${API_ENDPOINTS.uploadDir}${path}`;
  }
}
