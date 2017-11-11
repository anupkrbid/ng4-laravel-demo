/**
 * Service that will handel all authorization related api calls
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

	/** Initializing custom observables */
	loggedIn = new Subject();

	/** Service injection */
	constructor( private httpClient: HttpClient ) { }

	/** Api call to sign up a new user */
	signup( data: { name: string, email: string, password: string } ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'sign-up';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const config = {
			headers: headers
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	/** Api call to sign in an existing user */
	signin( data: { email: string, password: string } ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'sign-in';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const config = {
			headers: headers
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	/** Api call to logout a logged in user */
	signout( token: string ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'sign-out';
		const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
		const params = new HttpParams().set('token', token);
		const config = {
			params: params,
			headers: headers
		};

		return this.httpClient.post( apiUrl, '', config );

	}

	/** Function to get token of logged in user */
	getToken() { return localStorage.getItem( 'token' ); }

	/** Function to check if a user is authenticated or not */
	isAuthenticated() {

		if ( this.getToken() !== null ) {
			return true;
		} else {
			return false;
		}

	}

}
