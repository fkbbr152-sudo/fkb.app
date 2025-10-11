import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../model/services/auth.service';
import { MenuStateService } from '../../../model/services/menu-state.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  providers: [AuthService, MenuStateService],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent implements OnInit {
  isMenuOpen = false;
  userRole: string | null = null;
  menuOpen: boolean = false;
  isMobile = window.innerWidth <= 500;
  isOpen = true;
  rota: string | null = '';

  constructor(
    private authService: AuthService,
    private menuStateService: MenuStateService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authService.checkSession().subscribe({
      next: (response) => {
        // --- CORREÇÃO APLICADA AQUI ---
        // Verificamos a propriedade 'loggedIn' que o backend envia.
        if (response && response.loggedIn === true && response.user && response.user.role) {
          console.log('Sessão VÁLIDA. Acesso permitido.');
          this.userRole = response.user.role;

          if (response.user.role === 'admin') {
            this.rota = '/admin';
          }
          if (response.user.role === 'user') {
            this.rota = '/collaborator';
          }
        } else {
          console.log('Sessão inválida, resposta recebida:', response);
          this.authService.logout();
        }
      },
      error: (err) => {
        console.error('Erro ao verificar sessão:', err);
        this.authService.logout();
      }
    });

    this.menuStateService.menuState$.subscribe((state) => {
      this.isMenuOpen = state;
      this.cdr.detectChanges();
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.menuStateService.setMenuState(this.isOpen);
  }

  logout(): void {
    this.authService.logout();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 500;
    if (this.isMobile) {
      this.isOpen = false;
    }
  }
}

