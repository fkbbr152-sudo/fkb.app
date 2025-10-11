import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { API_ENDPOINTS} from '../core/config/api-endpoints';

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
      headers: { 'Content-Type': 'application/json' }, // Adiciona o cabeçalho
      withCredentials: true
    }).pipe(
      catchError((error) => {
        console.error('Erro no login:', error);
      // Exibe o alerta com SweetAlert2
      Swal.fire({
        toast: true,
        position: 'top-end', // ou 'bottom-end', 'top-start', etc.
        icon: 'error',       // ícone de erro; pode ser 'success', 'warning', 'info'
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
    return this.http.get<any>(`${API_ENDPOINTS.base}/check_session.php`, {withCredentials: true}).pipe(
      catchError(() => {
        this.router.navigate(['/login']); // Redireciona para o login em caso de erro
        return of(null);
      })
    );
  }
  
  logout(): void {
    this.http.get(`${API_ENDPOINTS.base}/logout.php`).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

}
