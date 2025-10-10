import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
 
  constructor(private http: HttpClient) {}
  // Obtém todas as imagens de uma categoria específica
getAllImagesByCategory(category: string): Observable<any[]> {
  return this.http.get<any[]>(`${API_ENDPOINTS.image}?category=${category}&all=true`);
}


  // Obtém a última imagem de uma categoria específica
  getLatestImage(category: string): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINTS.image}?category=${category}`);
  }

  // Obtém todas as imagens (caso precise)
  getImages(): Observable<any[]> {
    return this.http.get<any[]>(API_ENDPOINTS.image);
  }

// Adiciona uma nova imagem, incluindo a categoria
addImage(file: File, category: string): Observable<any> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('category', category);

  return this.http.post<any>(API_ENDPOINTS.image, formData);
}

  // Exclui uma imagem pelo ID
  deleteImage(id: number): Observable<any> {
    return this.http.delete<any>(`${API_ENDPOINTS.image}?id=${id}`);
  }
}
