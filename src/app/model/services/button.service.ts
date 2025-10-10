import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor(private http: HttpClient) {}

  getButtons(): Observable<any[]> {
    return this.http.get<any[]>(API_ENDPOINTS.buttons);
  }

  addButton(data: FormData): Observable<any> {
    // Aqui só aceitamos FormData mesmo (já montado no component)
    return this.http.post(API_ENDPOINTS.buttons, data);
  }

  updateButton(data: FormData): Observable<any> {
    // Também aceitamos sempre FormData (com id incluso)
    return this.http.post(API_ENDPOINTS.buttons, data);
  }

  deleteButton(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.buttons}?id=${id}`);
  }

  updateButtonVisibility(id: number, visible: boolean): Observable<any> {
    const formData = new FormData();
    formData.append('action', 'toggle_visibility');
    formData.append('id', id.toString());
    formData.append('visible', visible ? '1' : '0');

    return this.http.post(API_ENDPOINTS.buttons, formData);
  }
}
