import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from '../model/student';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private baseUrl = 'http://localhost:8080/api/v1/';
  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{
    let header = new HttpHeaders().set("Authorization", sessionStorage.getItem('token'));
    return this.httpClient.get<Student[]>(`${this.baseUrl}students`, {headers: header}).pipe(
      map(
        response => {
          return response;
        }
      )
    );
  }
}
