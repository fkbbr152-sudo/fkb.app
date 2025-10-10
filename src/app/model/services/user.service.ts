import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Listar todos os usuários
  listUsers(): Observable<any> {
    return this.http.get(`${API_ENDPOINTS.listUser}`);
  }

  // Cadastrar um novo usuário
  registerUser(username: string, password: string, role: string = 'user'): Observable<any> {
    return this.http.post(`${API_ENDPOINTS.listUser}`, { username, password, role });
  }

  // Editar um usuário existente (com senha opcional)
  editUser(id: number, username: string, role: string, password?: string): Observable<any> {
    const body: any = { id, username, role };
    if (password) {
      body.password = password;
    }
    return this.http.put(`${API_ENDPOINTS.listUser}`, body);
  }

  // Excluir um usuário
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.listUser}`, { body: { id } });
  }
}
