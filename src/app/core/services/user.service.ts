import { Injectable } from '@angular/core';
import {UserModel} from "../state/models";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

// the http headers are manage in interceptor

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}/login`, user);
  }

  signup(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}/sugnup`, user);
  }
}
