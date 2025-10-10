import { Component, Input, OnInit, ElementRef, AfterViewInit, ViewChild  } from '@angular/core';
import { ButtonListComponent } from '../../edita-cont/button-list/button-list.component';
import { PopupComponent } from '../popup/popup.component';
import { ImageService } from '../../../model/services/image.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { API_ENDPOINTS } from '../../../model/core/config/api-endpoints';

@Component({
  selector: 'app-sessao-inicio',
  standalone: true,
  imports: [
    ButtonListComponent,
    PopupComponent,
    CommonModule,
    HttpClientModule,
  ],
  providers: [ImageService],
  templateUrl: './sessao-inicio.component.html',
  styleUrl: './sessao-inicio.component.scss'
})
export class SessaoInicioComponent implements OnInit {
  backgroundUrl: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getLatestImage('hero').subscribe((data) => {
      // Aqui ajustamos o caminho
      const path = data?.path;
      this.backgroundUrl = path ? this.normalizeImagePath(path) : '';
      console.log('Imagem carregada:', this.backgroundUrl);
    });
  }

  private normalizeImagePath(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${API_ENDPOINTS.uploadDir}${path}`;
  }

    @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;
  showFallback = false;

  ngAfterViewInit() {
    const video = this.videoEl.nativeElement;

    // Garante mute antes de tentar tocar
    video.muted = true;

    // Tenta tocar
    video.play().catch(err => {
      console.warn('Autoplay bloqueado, usando fallback:', err);
      this.showFallback = true;
    });
  }
}