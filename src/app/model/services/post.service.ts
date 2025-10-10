import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/post';
import { map } from 'rxjs/operators';
import { API_ENDPOINTS } from '../core/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}
  
  getPosts(): Observable<Post[]> {
    return this.http.get<{ data: Post[] }>(API_ENDPOINTS.insta).pipe(
      map(response => response.data)
    );
  }
  
  
  addPost(post: Post): Observable<any> {
    post.embedCode = post.embedCode.replace(/<script.*?<\/script>/gs, '');
    return this.http.post(API_ENDPOINTS.insta, post);
  }
  
  updatePost(post: Post): Observable<any> {
    post.embedCode = post.embedCode.replace(/<script.*?<\/script>/gs, '');
    return this.http.put(`${API_ENDPOINTS.insta}/${post.id}`, post);
  }
  
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${API_ENDPOINTS.insta}/${id}`);
  }
}
