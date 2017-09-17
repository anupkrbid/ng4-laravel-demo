/**
 * Component to login an existing user
 */
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component( {
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: [ './sign-in.component.css' ]
} )
export class SignInComponent {

	/** Service injection */
	constructor( private authService: AuthService,
	             private router: Router ) { }

	/** Function call to submit sign in form */
	onSignIn( formSignIn: NgForm ) {

		const body = {
			email: formSignIn.value.email,
			password: formSignIn.value.password
		};

		/** Service call to sign in an existing user */
		this.authService.signin( body )
			.subscribe(
				( response: { success: boolean, message: string, token: string } ) => {
					localStorage.setItem( 'token', response.token );
				},
				( error: Response ) => console.log( error ),
				() => {
					this.authService.loggedIn.next();
					formSignIn.reset();
					this.router.navigate( [ '/quotes' ] );
				}
			);

	}

	/** Function call to reset sign in form */
	onReset( formSignIn: NgForm ) {	formSignIn.reset(); }

}
