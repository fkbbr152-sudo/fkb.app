import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiResponse } from '../types/dou';
import { API_ENDPOINTS } from '../core/config/api-endpoints';
import { DiplomaParaRetirar } from '../types/diplomas-retirar';

@Injectable({
  providedIn: 'root'
})
export class DouService {
private http = inject(HttpClient);

  /**
   * Busca diplomas de um aluno pelo CPF.
   * @param cpf O CPF do aluno (apenas números).
   * @returns Observable com a resposta da API.
   */
  searchDiplomasByCpf(cpf: string): Observable<ApiResponse> {
    const url = `${API_ENDPOINTS.dou}?cpf=${cpf}`; // Passa o CPF como parâmetro GET

    return this.http.get<ApiResponse>(url).pipe(
      catchError(this.handleError) // Centraliza o tratamento de erros
    );
  }

  // --- Métodos Futuros (Exemplos) ---
  createDiploma(diplomaData: any): Observable<any> {
    return this.http.post<any>(API_ENDPOINTS.dou, diplomaData).pipe(
      catchError(this.handleError)
    );
  }

  updateDiploma(diplomaId: number, diplomaData: any): Observable<any> {
    // Inclui o ID no corpo da requisição PUT
    const dataToSend = { ...diplomaData, diploma_id: diplomaId };
    return this.http.put<any>(API_ENDPOINTS.dou, dataToSend).pipe(
      catchError(this.handleError)
    );
  }

  deleteDiploma(diplomaId: number): Observable<any> {
    const url = `${API_ENDPOINTS.dou}?id=${diplomaId}`; // Passa o ID como parâmetro GET para DELETE
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError)
    );
  }
 

  /**
   * Função centralizada para tratamento de erros de HTTP.
   * @param error O objeto de erro HTTP.
   * @returns Um Observable que emite o erro.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido.';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente ou de rede
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // O backend retornou um código de erro
      // O corpo da resposta pode conter pistas sobre o que deu errado
      errorMessage = `Erro ${error.status}: ${error.error?.message || error.statusText}`;
      if (error.status === 404) {
        errorMessage = 'Nenhum diploma encontrado para o CPF informado.';
      } else if (error.status === 400) {
        errorMessage = error.error?.message || 'Requisição inválida. Verifique os dados enviados.';
      }
    }
    console.error(errorMessage); // Loga o erro no console
    return throwError(() => new Error(errorMessage)); // Retorna o erro como Observable
  }

  getDiplomasParaRetirar(): Observable<DiplomaParaRetirar[]> {
    return this.http.get<DiplomaParaRetirar[]>(API_ENDPOINTS.diplomasParaRetirar);
  }
}
