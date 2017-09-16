import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../environments/environment';

@Injectable()
export class AuthService {

	loggedIn = new Subject();

	constructor( private httpClient: HttpClient ) { }

	signup( data: { name: string, email: string, password: string } ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'sign-up';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const config = {
			headers: headers
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	signin( data: { email: string, password: string } ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'sign-in';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const config = {
			headers: headers
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	signout( token: string ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'sign-out';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const params = new HttpParams().set('token', token);
		const config = {
			params: params,
			headers: headers
		};

		return this.httpClient.post( apiUrl, '', config );

	}

	getToken() {

		return localStorage.getItem( 'token' );

	}

	isAuthenticated() {

		if ( this.getToken() !== null ) {
			return true;
		} else {
			return false;
		}

	}

}
