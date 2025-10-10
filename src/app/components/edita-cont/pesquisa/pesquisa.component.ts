import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../model/services/auth.service';
import { MenuStateService } from '../../../model/services/menu-state.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  providers: [AuthService, MenuStateService],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent implements OnInit {
  isMenuOpen = false; // Estado do menu lateral
  userRole: string | null = null; // Papel do usuário (admin, collaborator, etc.)
  menuOpen: boolean = false; // Estado do menu de notificações
  isMobile = window.innerWidth <= 500; // Verifica se a tela é mobile
  isOpen = true; // Estado da sidebar (aberta/fechada)
  rota: string | null ='';

  constructor(
    private authService: AuthService,
    private menuStateService: MenuStateService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
   // Verifica a sessão do usuário ao inicializar o componente
   this.authService.checkSession().subscribe({
    next: (response) => {
      // Verifica se a resposta contém o campo 'authenticated' como true e a propriedade 'role' dentro de 'user'
      if (response && response.authenticated && response.user && response.user.role) {
        this.userRole = response.user.role; // Atualiza o papel do usuário

        if(response.user.role === 'admin'){
          this.rota = '/admin';
        }
        if (response.user.role === 'user'){
          this.rota = '/collaborator'
        }
      } else {
        console.log('Sessão inválida, resposta:', response); // Log detalhado
        this.authService.logout(); // Força o logout se a sessão for inválida
      }
    },
    error: (err) => {
      console.error('Erro ao verificar sessão:', err); // Log de erro
      this.authService.logout(); // Força o logout em caso de erro
    }
  });


    // Observa o estado do menu lateral
    this.menuStateService.menuState$.subscribe((state) => {
      this.isMenuOpen = state;
      this.cdr.detectChanges(); // Força a atualização da view
    });
  }

  // Alterna o estado do menu de notificações
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Alterna o estado da sidebar
  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
    this.menuStateService.setMenuState(this.isOpen); // Atualiza o estado no serviço
  }

  // Faz logout do usuário
  logout(): void {
    this.authService.logout();
  }

  // Verifica o tamanho da tela ao redimensionar a janela
  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 500;
    if (this.isMobile) {
      this.isOpen = false; // Fecha a sidebar em dispositivos móveis
    }
  }
}