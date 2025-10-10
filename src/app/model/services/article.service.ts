import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iarticle } from '../types/iarticle';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Iarticle[]> {
    return this.http.get<Iarticle[]>(API_ENDPOINTS.articles);
  }

  getArticleById(id: number): Observable<Iarticle> {
    return this.http.get<Iarticle>(`${API_ENDPOINTS.articles}?id=${id}`);
  }

  addArticle(article: Iarticle): Observable<any> {
    return this.http.post(API_ENDPOINTS.articles, article);
  }

  updateArticle(article: Iarticle): Observable<any> {
    return this.http.put(`${API_ENDPOINTS.articles}?id=${article.id}`, article);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.articles}?id=${id}`);
  }
}
