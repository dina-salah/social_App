import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}/users/signup`, data);
  }
  signIn(data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseurl}/users/signin`, data);
  }
  changePassword(data: any): Observable<any> {
    return this.httpClient.patch(`${environment.baseurl}/users/change-password`, data);
  }
  uploadProfilePhoto(data: any): Observable<any> {
    return this.httpClient.put(`${environment.baseurl}/users/upload-photo`, data);
  }
  getLoggedUserData(): Observable<any> {
    return this.httpClient.get(`${environment.baseurl}/users/profile-data`);
  }
}
