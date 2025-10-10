import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';
import { Empresa } from '../types/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

   constructor(private http: HttpClient) {}

  listar(search: string = '', page: number = 1): Observable<Empresa[]> {
    const params = new HttpParams().set('search', search).set('page', page.toString());
    return this.http.get<Empresa[]>(API_ENDPOINTS.empresasConveniadas, { params });
  }

  adicionar(empresa: Empresa): Observable<any> {
    return this.http.post(API_ENDPOINTS.empresasConveniadas, empresa);
  }

  atualizar(id: number, empresa: Empresa): Observable<any> {
    return this.http.put(`${API_ENDPOINTS.empresasConveniadas}?id=${id}`, empresa);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.empresasConveniadas}?id=${id}`);
  }
}
