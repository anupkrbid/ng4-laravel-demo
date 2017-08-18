import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  loggedIn = new Subject();

  constructor( private http: Http) { }

  signup(body: { name: string, email: string, password: string }): Observable<any> {
    const header = new Headers({ 'X-Requested-With': 'XMLHttpRequest' });
    return this.http.post('http://127.0.0.1:8000/api/sign-up', body, { headers: header });
  }

  signin(body: { email: string, password: string }): Observable<any> {
    const header = new Headers({ 'X-Requested-With': 'XMLHttpRequest' });
    return this.http.post('http://127.0.0.1:8000/api/sign-in', body, { headers: header });
  }

  signout(token: string): Observable<any> {
    const header = new Headers({'X-Requested-With': 'XMLHttpRequest'});
    return this.http.post('http://127.0.0.1:8000/api/sign-out?token=' + token, '', {headers: header});
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    if (this.getToken() !== null) {
      return true;
    } else {
      return false;
    }
  }

}
