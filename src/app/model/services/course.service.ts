import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../types/course.interface';
import { API_ENDPOINTS } from '../core/config/api-endpoints';
import { COURSES } from '../data/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  // GET simples (sem params) — retorna mock se API falhar
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_ENDPOINTS.cursos).pipe(
      catchError(() => {
        console.warn('API indisponível. Carregando dados locais (mock).');
        return of(COURSES);
      })
    );
  }

  // GET com busca/paginação (mantive por compatibilidade)
  listar(search: string = '', page: number = 1): Observable<Course[]> {
    const params = new HttpParams().set('search', search).set('page', page.toString());
    return this.http.get<Course[]>(API_ENDPOINTS.cursos, { params }).pipe(
      catchError(() => {
        console.warn('API indisponível. Carregando dados locais (mock).');
        return of(COURSES);
      })
    );
  }

  // POST para adicionar — aqui esperamos FormData montado no componente
  addCourse(data: FormData): Observable<any> {
    return this.http.post(API_ENDPOINTS.cursos, data);
  }

  // POST para atualizar — padronizado como no exemplo (envia FormData com id incluso)
  updateCourse(data: FormData): Observable<any> {
    return this.http.post(API_ENDPOINTS.cursos, data);
  }

  // DELETE com id como query string
  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.cursos}?id=${id}`);
  }
}