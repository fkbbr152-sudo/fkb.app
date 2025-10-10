import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule, Gallery, GalleryItem, ImageItem, ImageItemData } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

// A interface customizada ainda é necessária para a criação dos itens
interface CampusImageItem extends ImageItemData {
  caption?: string;
}

@Component({
  selector: 'app-campus',
  standalone: true,
  // GalleryModule é necessário para a diretiva [gallery] funcionar
  imports: [ CommonModule, GalleryModule, LightboxModule ],
  templateUrl: './campus.component.html',
  styleUrl: './campus.component.scss'
})
export class CampusComponent implements OnInit {

  items: GalleryItem[] = [];
  // 1. Adicione uma ID para a galeria
  galleryId = 'campusGallery';

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Corrigindo os caminhos das imagens para apontar para a pasta correta
    const imageData = [
        { src: 'img2.png', caption: 'Central do nosso campus' },
        { src: 'img7.png', caption: 'Centro de convenções' },
        { src: 'img3.png', caption: 'Biblioteca moderna e completa' },
        { src: 'img5.png', caption: 'Auditório para grandes eventos' },
        { src: 'img6.png', caption: 'Núcleo de saúde e jurídica' },
        { src: 'img4.png', caption: 'Piscina semiolímpica para atividades esportivas' },
        { src: 'img8.png', caption: 'Academia equipada' },
        { src: 'img9.png', caption: 'Ambientes de aprendizado e integração' }
    ];

    this.items = imageData.map(item =>
      new ImageItem({
        src: item.src,
        thumb: item.src,
        caption: item.caption
      } as CampusImageItem)
    );

    // 2. Carregue os itens na referência da galeria usando a ID
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.items);
  }
}