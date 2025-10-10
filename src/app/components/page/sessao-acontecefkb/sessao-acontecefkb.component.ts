import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageGalleryComponent } from "../../edita-cont/image-gallery/image-gallery.component";

@Component({
  selector: 'app-sessao-acontecefkb',
  standalone: true,
  imports: [CommonModule, ImageGalleryComponent],
  templateUrl: './sessao-acontecefkb.component.html',
  styleUrls: ['./sessao-acontecefkb.component.scss']
})
export class SessaoAcontecefkbComponent implements OnInit {
  imageMap: Map<string, string> = new Map([
    ['1', '1.png'],
    ['2', '2.png'],
    ['3', '3.png'],
    ['4', '4.png'],
    ['5', '5.png'],
    ['6', '6.png'],
    ['7', '7.png'],
    ['8', '8.png'],
    ['9', '9.png'],
    ['10', '10.png'],
    ['11', '11.png'],
    ['12', '12.png'],
    ['13', '13.png'],
    ['14', '14.png'],
    ['15', '15.png'],
    ['16', '16.png'],
    ['17', '17.png'],
    ['18', '18.png'],
    ['19', '19.png'],
    ['20', '20.png'],
    ['21', '21.png'],
    ['22', '22.png'],
    ['23', '23.png'],
    ['24', '24.png'],
    ['25', '25.png'],
    ['26', '26.png'],
    ['27', '27.png'],
    ['28', '28.png'],
    ['29', '29.png'],
    ['30', '30.png'],
    ['31', '31.png'],
  ]);

  imageArray: string[] = [];
  secondImageArray: string[] = [];

  ngOnInit(): void {
    // Converte o Map em arrays
    const allImages = Array.from(this.imageMap.values());
    
    const firstGalleryImages = allImages.slice(0, 15);
    const secondGalleryImages = allImages.slice(15);

    // Duplica o conteúdo de cada array para criar o efeito de loop infinito
    this.imageArray = [...firstGalleryImages, ...firstGalleryImages];
    this.secondImageArray = [...secondGalleryImages, ...secondGalleryImages];
  }
}