import { Component, HostListener } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';
import { SessaoAcontecefkbComponent } from '../sessao-acontecefkb/sessao-acontecefkb.component';
import { SessaoAppsComponent } from '../sessao-apps/sessao-apps.component';
import { SessaoContatosComponent } from '../sessao-contatos/sessao-contatos.component';
import { SessaoInicioComponent } from '../sessao-inicio/sessao-inicio.component';
import { CampusComponent } from "../campus/campus.component";
import { NovoNavBarComponent } from "../novo-nav-bar/novo-nav-bar.component";


@Component({
  selector: 'app-index-inicio',
  standalone: true,
  imports: [
    SessaoInicioComponent,
    SessaoAcontecefkbComponent,
    SessaoAppsComponent,
    CursosComponent,
    SessaoContatosComponent,
    CampusComponent,
    NovoNavBarComponent
],
  templateUrl: './index-inicio.component.html',
  styleUrl: './index-inicio.component.scss'
})
export class IndexInicioComponent {
   @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if ((event.target as HTMLElement).tagName === 'A') {
      const target = (event.target as HTMLAnchorElement).getAttribute('href');
      if (target?.startsWith('#')) {
        event.preventDefault();
        const targetElement = document.querySelector(target);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}