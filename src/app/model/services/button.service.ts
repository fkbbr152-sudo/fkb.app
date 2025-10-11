import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor(private http: HttpClient) {}

  /**
   * Busca todos os botões.
   * CORRIGIDO: Adicionado { withCredentials: true } para autenticação e
   * catchError para retornar um array vazio e não quebrar a UI.
   */
  getButtons(): Observable<any[]> {
    return this.http.get<any[]>(API_ENDPOINTS.buttons, { withCredentials: true }).pipe(
      catchError(error => {
        console.error('Erro ao buscar os botões (verifique se a API está correta e segura):', error);
        return of([]); // Retorna um array vazio para não quebrar o .map() no componente.
      })
    );
  }

  /**
   * Adiciona um novo botão.
   * CORRIGIDO: Adicionado { withCredentials: true } para autenticação.
   */
  addButton(data: FormData): Observable<any> {
    return this.http.post(API_ENDPOINTS.buttons, data, { withCredentials: true }).pipe(
      catchError(error => {
        console.error('Erro ao adicionar botão:', error);
        return of({ error: 'Falha ao adicionar botão' });
      })
    );
  }

  /**
   * Atualiza um botão existente.
   * CORRIGIDO: Adicionado { withCredentials: true } para autenticação.
   */
  updateButton(data: FormData): Observable<any> {
    return this.http.post(API_ENDPOINTS.buttons, data, { withCredentials: true }).pipe(
      catchError(error => {
        console.error('Erro ao atualizar botão:', error);
        return of({ error: 'Falha ao atualizar botão' });
      })
    );
  }

  /**
   * Deleta um botão.
   * CORRIGIDO: Adicionado { withCredentials: true } para autenticação.
   */
  deleteButton(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.buttons}?id=${id}`, { withCredentials: true }).pipe(
      catchError(error => {
        console.error('Erro ao deletar botão:', error);
        return of({ error: 'Falha ao deletar botão' });
      })
    );
  }

  /**
   * Atualiza a visibilidade de um botão.
   */
  updateButtonVisibility(id: number, visible: boolean): Observable<any> {
    // Esta lógica é necessária porque seu PHP espera um formulário completo para a atualização.
    return this.getButtons().pipe(
      switchMap(buttons => {
        const buttonToUpdate = buttons.find(b => b.id === id);
        if (!buttonToUpdate) {
          return of({ error: 'Botão não encontrado' });
        }

        const formData = new FormData();
        formData.append('id', id.toString());
        formData.append('text', buttonToUpdate.text);
        formData.append('link', buttonToUpdate.link || ''); 
        formData.append('visible', visible ? '1' : '0');

        return this.updateButton(formData);
      }),
      catchError(error => {
        console.error('Erro ao atualizar visibilidade:', error);
        return of({ error: 'Falha ao atualizar visibilidade' });
      })
    );
  }
}

