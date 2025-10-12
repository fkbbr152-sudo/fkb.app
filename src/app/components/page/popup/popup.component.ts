import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../../../model/services/image.service';
import { PopupService } from '../../../model/services/popup.service';
import { environment } from '../../../model/environments/environments';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [ImageService, PopupService],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  popupVisible = false;
  popupImage: any = null; // Propriedade para armazenar a imagem do popup
  readonly uploadDir = `${environment.apiBaseUrl}/backend-login-fkb/assets/`; // Ajuste conforme necessário

  constructor(private popupService: PopupService, private imageService: ImageService) {}

  ngOnInit(): void {
    this.checkPopupState();
    this.loadPopupImage();
  }

  // Verifica o estado do popup
  checkPopupState(): void {
    this.popupService.getPopupState().subscribe((response) => {
      this.popupVisible = response.state;
      console.log('Popup state:', response.state);
    });
  }

  // Fecha o popup
  closePopup(): void {
    this.popupVisible = false;
  }

  // Carrega somente a última imagem da categoria "popup"
  loadPopupImage(): void {
    this.imageService.getLatestImage('popup').subscribe(data => {
      let image = null;
      // Caso o backend retorne um array (mesmo contendo apenas um item)
      if (Array.isArray(data)) {
        if (data.length > 0) {
          image = data[0];
        }
      } else if (data && data.path) {
        // Ou se retornar um objeto diretamente
        image = data;
      }

      if (image) {
        image.path = this.normalizeImagePath(image.path);
      }

      this.popupImage = image;
    });
  }

  // Adiciona o caminho base à URL da imagem se necessário
  private normalizeImagePath(path: string): string {
    return /^https?:\/\//.test(path) ? path : `${this.uploadDir}${path}`;
  }

}
