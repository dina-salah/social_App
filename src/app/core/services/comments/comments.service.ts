import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  
    createComment(data: any): Observable<any> {
      return this.httpClient.post(`${environment.baseurl}/comments`, data);
    }
    getCommentsPost(postId: any): Observable<any> {
      return this.httpClient.get(`${environment.baseurl}/posts/${postId}/comments`);
    }
    updateComments(commentId: any,data: any): Observable<any> {
      return this.httpClient.put(`${environment.baseurl}/comments/${commentId}`, data);
    }
    deleteComments(commentId: any): Observable<any> {
      return this.httpClient.delete(`${environment.baseurl}/comments/${commentId}`);
    }
}
