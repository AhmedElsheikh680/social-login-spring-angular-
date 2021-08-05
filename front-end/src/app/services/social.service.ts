import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private httpClient: HttpClient) { }

  loginWithGoogle(token): Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}google`, {token}).pipe(
      map(
        response => {
          sessionStorage.setItem('token', 'Bearer ' + response.token);
          return response;
        }
      )
    );
  }

  loginWithFacebook(token): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}facebook`, {token}).pipe(
      map(
        response => {
          sessionStorage.setItem('token', 'Bearer ' + response.token);
          return  response;
        }
      )
    );
  }
}
