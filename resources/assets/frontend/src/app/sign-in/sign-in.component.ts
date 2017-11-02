/**
 * Component to login an existing user
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../store/auth/auth.actions';

@Component( {
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: [ './sign-in.component.css' ]
} )
export class SignInComponent {

	/** Service injection */
	constructor( private store: Store<fromApp.AppState> ) {}

	/** Function call to submit sign in form */
	onSignIn( formSignIn: NgForm ) {
		const body = {
			email: formSignIn.value.email,
			password: formSignIn.value.password
		};
		this.store.dispatch( new AuthActions.SignInAttempt( body ) );
	}

	/** Function call to reset sign in form */
	onReset( formSignIn: NgForm ) {
		formSignIn.reset();
	}

}
