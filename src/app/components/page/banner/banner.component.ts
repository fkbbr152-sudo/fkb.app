import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
ngAfterViewInit() {
  const videoElement = document.querySelector<HTMLVideoElement>('.hero-video');
  if (videoElement) {
    videoElement.play().catch(error => {
      console.log('Autoplay falhou:', error);
    });
  }
}


}
