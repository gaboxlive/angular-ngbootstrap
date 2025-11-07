import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from '../interfaces/ResponseData';
import { LoginResponse } from '../interfaces/LoginResponse';
import { LoginRequest } from '../interfaces/LoginRequest';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  protected http = inject(HttpClient);

  login = (login: LoginRequest): Observable<ResponseData<LoginResponse>> => {
    return this.http.get<ResponseData<LoginResponse>>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  };
}
