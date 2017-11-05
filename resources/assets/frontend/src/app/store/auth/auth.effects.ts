import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as fromApp from '../app.reducers';
import * as AlertActions from '../alert/alert.actions';
import * as AuthActions from './auth.actions';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthEffects {

	constructor( private actions$: Actions,
	             private httpClient: HttpClient,
	             private router: Router,
	             private store: Store<fromApp.AppState> ) { }

	@Effect()
	authSignUp = this.actions$
		.ofType( AuthActions.SIGNUP_ATTEMPT )
		.switchMap( ( action: AuthActions.SignUpAttempt ) => {
			const apiUrl = environment.BASE_URL + 'sign-up';
			const headers = new HttpHeaders().set( 'X-Requested-With', 'XMLHttpRequest' );
			const config = {
				headers: headers
			};
			return this.httpClient.post( apiUrl, action.payload, config );
		} )
		.mergeMap( ( res: any ) => {
			//if ( res.success ) {
				return [
					{
						type: AlertActions.ALERT_SHOW,
						payload: { message: res.message, type: 'success' }
					},
					{
						type: AuthActions.SIGNUP_SUCCESS,
						payload: true
					}
				];
			// } else {
			// 	return {
			// 		type: AlertActions.ALERT_SHOW,
			// 		payload: { message: res.message, type: 'danger' }
			// 	};
			// }
		} )
		.catch( (err: HttpErrorResponse) => of( { type: AlertActions.ALERT_SHOW, payload: { message: err.error.email ? err.error.email[0] : '', type: 'danger' } } ) );

	@Effect()
	authSignIn = this.actions$
		.ofType( AuthActions.SIGNIN_ATTEMPT )
		.switchMap( ( action: AuthActions.SignInAttempt ) => {
			const apiUrl = environment.BASE_URL + 'sign-in';
			const headers = new HttpHeaders().set( 'X-Requested-With', 'XMLHttpRequest' );
			const config = {
				headers: headers
			};
			return this.httpClient.post( apiUrl, action.payload, config );
		} )
		.map( ( res: any ) => {
			if ( res.success ) {
				this.router.navigate( [ '/quotes' ] );
				return {
					type: AuthActions.SIGNIN_SUCCESS,
					payload: res.token
				};
			} else {
				return {
					type: AlertActions.ALERT_SHOW,
					payload: { message: res.message, type: 'danger' }
				};
			}
		} )
		.catch( (err: HttpErrorResponse) => of( { type: AlertActions.ALERT_SHOW, payload: { message: err.error.message, type: 'danger' } } ) );

	@Effect()
	authSignOut = this.actions$
		.ofType( AuthActions.SIGNOUT_ATTEMPT )
		.withLatestFrom( this.store.select( 'auth' ) )
		.switchMap( ( [ action, state ] ) => {
			const apiUrl = environment.BASE_URL + 'sign-out';
			const headers = new HttpHeaders().set( 'X-Requested-With', 'XMLHttpRequest' );
			const params = new HttpParams().set( 'token', state.token );
			const config = {
				params: params,
				headers: headers
			};
			return this.httpClient.post( apiUrl, '', config );
		} )
		.map( ( res: any ) => {
			if ( res.success ) {
				this.router.navigate( [ '/' ] );
				return {
					type: AuthActions.SIGNOUT_SUCCESS
				};
			} else {
				return {
					type: AlertActions.ALERT_SHOW,
					payload: { message: res.message, type: 'danger' }
				};
			}
		} )
		.catch( (err: HttpErrorResponse) => of( { type: AlertActions.ALERT_SHOW, payload: { message: err.error, type: 'danger'} } ) );

}

