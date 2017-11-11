/**
 * Component to register a new user
 */
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/core.reducers';
import * as AuthActions from '../../store/auth/auth.actions';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';

@Component( {
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: [ './sign-up.component.css' ]
} )
export class SignUpComponent implements OnInit, OnDestroy {

	/** Variable declarations */
	formSignUp: FormGroup;
	signUpSubscription: Subscription;

	/** Service injection */
	constructor( private store: Store<fromApp.AppState>,
	             private formBuilder: FormBuilder ) { }

	/** Perform task when component initializes */
	ngOnInit() {
		this.signUpSubscription = this.store.select( 'auth' )
			.subscribe(
				( state ) => {
					console.log( state );
					if ( state.registered ) {
						this.formSignUp.reset();
						this.store.dispatch( new AuthActions.SignUpSuccess( false ) );
					}
				}
			);

		/** Creating the form structure */
		this.formSignUp = this.formBuilder.group( {
			'name': new FormControl( null, Validators.required ),
			'email': new FormControl( null, [ Validators.required, Validators.email ] ),
			'password': new FormControl( null, Validators.required ),
			'cnf_password': new FormControl( null, Validators.required )
		}, { validator: this.confirmPassword } );
	}

	/** Custom confirm password validator */
	confirmPassword = ( control: AbstractControl ): { [key: string]: boolean } => {
		const pass = control.get( 'password' );
		const cnfPass = control.get( 'cnf_password' );
		if ( !pass || !cnfPass ) {
			return null;
		}
		if ( pass.value === cnfPass.value ) {
			return null;
		} else {
			control.get( 'cnf_password' ).setErrors( { confirmPassword: true } );
			return { confirmPassword: true };
		}
	};

	// confirmPasswordValidator( control: FormControl ): { [ s: string ]: boolean } {
	// 	 const pwd = this.formSignUp.get('password').value;
	// 	// const pwd = control.get('password').value;
	// 	const cnf_pwd = control.value;
	// 	if(pwd !== cnf_pwd) {
	// 		return { 'confirmPasswordValidator': true };
	// 	}
	// 	return null;this.confirmPasswordValidator.bind(this)
	// }

	/** Function call to submit sign up form */
	onSignUp() {
		const body = this.formSignUp.value;
		this.store.dispatch( new AuthActions.SignUpAttempt( body ) );
	}

	/** Function call to reset sign up form */
	onReset() {
		this.formSignUp.reset();
	}

	ngOnDestroy() {
		this.signUpSubscription.unsubscribe();
	}
}
