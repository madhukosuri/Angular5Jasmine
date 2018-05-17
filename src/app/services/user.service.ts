import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Users} from '../data/users';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }

  login(login: any) {
    const loginUrl = 'http://localhost:3000/users/login';
    return this.http.post<any>(loginUrl, login).pipe(
      tap(
        function (data) {
          if (data.status == 'success') {
            localStorage.setItem('currentUser', JSON.stringify(data))
          }
          return data;
        }
      )
    )
  }

  signUp(singup: any){
    const signUpUrl = 'http://localhost:3000/users/sign_up';
    return this.http.post<any>(signUpUrl, singup).pipe(
      tap(
        function (data) {
          if (data.status == 'success') {
            localStorage.setItem('currentUser', JSON.stringify(data))
          }
          return data;
        }
      )
    )
  }

  create(users: any) {
    const creatUserUrl = 'http://localhost:3000/users';
    return this.http.post<any>(creatUserUrl, users).pipe(
      tap(
        function (data) {
          return data;
        }
      )
    )
  }

  getUserInfo(user_id: any) {
    const getUserInfoUrl = 'http://localhost:3000/users/'+user_id;
    console.log(getUserInfoUrl)
    return this.http.get<any>(getUserInfoUrl).pipe(
      tap(
        function (data) {
          return data;
        }
      )
    )
  }

}
