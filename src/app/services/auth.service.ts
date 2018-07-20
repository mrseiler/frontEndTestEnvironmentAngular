import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(public http: HttpClient, public router: Router) { }

  register(regUserData: RegisterUser) {
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(`${Api_Url}/student/addstudent`, regUserData, {headers: this.setHeader()});
  }

  login(loginInfo) {
    const str = `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    return this.http.post(`${Api_Url}/Token`, str).subscribe( (token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this.router.navigate(['/home']);
    });
  }

  currentUser(): Observable<Object> {
    if(!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false));}
    
    return this.http.get(`${Api_Url}/student`, { headers: this.setHeader() });
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this.http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}

