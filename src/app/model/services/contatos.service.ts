import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaffMember } from '../types/StaffMember';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient) { }

  /**
   * Busca a lista completa de funcionários da API
   */
  public getContatos(): Observable<StaffMember[]> {
    return this.http.get<StaffMember[]>(API_ENDPOINTS.contatos);
  }
}
