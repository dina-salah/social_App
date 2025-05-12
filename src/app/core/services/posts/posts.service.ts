import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  createPost(data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}/posts`, data);
  }
  getAllPost(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/posts`);
  }
  getMyPost(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/users/664bcf3e33da217c4af21f00/posts`);
  }
  getSinglePost(postId: any): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/posts/${postId}`);
  }
  updatePost(postId: any, data: any): Observable<any> {
    return this.httpClient.put(`${environment.baseurl}/posts/${postId}`, data);
  }
  deletePost(postId: any): Observable<any> {
    return this.httpClient.delete(`${environment.baseurl}/posts/${postId}`);
  }
}
