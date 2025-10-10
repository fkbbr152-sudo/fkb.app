import { state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class PopupService {


  constructor(private http: HttpClient) {}

  getPopupState(): Observable<{ state: boolean }> {
    return this.http.get<{ state: boolean }>(API_ENDPOINTS.popup);
  }

  updatePopupState(state: boolean): Observable<any> {
    return this.http.post(API_ENDPOINTS.popup, { state });
  }
}
