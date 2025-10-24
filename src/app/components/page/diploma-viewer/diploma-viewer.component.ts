import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NovoNavBarComponent } from "../novo-nav-bar/novo-nav-bar.component";

@Component({
  selector: 'app-diploma-viewer',
  standalone: true,
 imports: [CommonModule, NovoNavBarComponent],
  templateUrl: './diploma-viewer.component.html',
  styleUrl: './diploma-viewer.component.scss'
})
export class DiplomaViewerComponent implements OnInit {

  // URL base do iframe
  private readonly IframeBaseUrl = 'https://fkb.assinamos.com.br/iframe/diploma/';
  // URL segura para ser usada no template
  public iframeSrc: SafeResourceUrl = this.IframeBaseUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Observa os parâmetros da URL
    this.route.queryParamMap.subscribe(params => {
      const validationCode = params.get('cod');
      let finalUrl = this.IframeBaseUrl;

      if (validationCode) {
        finalUrl += validationCode;
      }
      
      // Sanitiza a URL para que o Angular a considere segura
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
    });
  }
}
