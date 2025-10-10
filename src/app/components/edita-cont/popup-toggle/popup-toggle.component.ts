import { Component, OnInit } from '@angular/core';
import { PopupService } from '../../../model/services/popup.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { ImageUploadComponent } from '../image-upload/image-upload.component';
import { ImageService } from '../../../model/services/image.service';

@Component({
  selector: 'app-popup-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ImageGalleryComponent,ImageUploadComponent],
  providers:[PopupService],
  templateUrl: './popup-toggle.component.html',
  styleUrl: './popup-toggle.component.scss'
})
export class PopupToggleComponent implements OnInit {
  popupState = false;
  
  constructor(private popupService: PopupService) {}

  ngOnInit(): void {
    this.loadPopupState();
  }

  loadPopupState(): void {
    this.popupService.getPopupState().subscribe((response) => {
      this.popupState = response.state;
    });
  }

  togglePopup(): void {
    this.popupService.updatePopupState(this.popupState).subscribe(() => {
      console.log('Estado do popup atualizado.');
    });
  }





}
