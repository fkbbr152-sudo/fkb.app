import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

interface LoginResponse {
  success?: string;
  role?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    console.log('Autenticação bem sucedida!')
    return this.http.post<any>(`${API_ENDPOINTS.base}/login.php`, body, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }).pipe(
      catchError((error) => {
        console.error('Erro no login:', error);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Login ou senha inválida',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });
        return of({ error: 'Erro ao fazer login' });
      })
    );
  }

  checkSession(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINTS.base}/check_session.php`, { withCredentials: true }).pipe(
      catchError(() => {
        this.router.navigate(['/login']); // Redireciona para o login em caso de erro
        return of(null);
      })
    );
  }

  logout(): void {
    // CORREÇÃO: Adicionado { withCredentials: true } e usando API_ENDPOINTS.logout
    this.http.get(API_ENDPOINTS.logout, { withCredentials: true }).subscribe({
      next: () => {
        console.log('Logout bem-sucedido, redirecionando...');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro no logout, redirecionando mesmo assim.', err);
        // Mesmo que o backend falhe, força o redirecionamento para o login
        this.router.navigate(['/login']);
      }
    });
  }
}
