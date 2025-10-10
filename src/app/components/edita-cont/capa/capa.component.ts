import { Component } from '@angular/core';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-capa',
  standalone: true,
  imports: [ImageUploadComponent, ImageGalleryComponent],
  templateUrl: './capa.component.html',
  styleUrl: './capa.component.scss'
})
export class CapaComponent {

}
