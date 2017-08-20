import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../auth.service';


@Component( {
	selector : 'app-sign-up',
	templateUrl : './sign-up.component.html',
	styleUrls : [ './sign-up.component.css' ]
} )
export class SignUpComponent implements OnInit {
	
	formSignUp: FormGroup;
	
	constructor( private authService: AuthService ) {   }
	
	ngOnInit() {
		this.formSignUp = new FormGroup( {
			'name' : new FormControl( null, Validators.required ),
			'email' : new FormControl( null, [ Validators.required, Validators.email ] ),
			'password' : new FormControl( null, Validators.required ),
			'cnf_password' : new FormControl( null, Validators.required )
		} );
	}
	
	// confirmPasswordValidator( control: FormControl ): { [ s: string ]: boolean } {
	// 	 const pwd = this.formSignUp.get('password').value;
	// 	// const pwd = control.get('password').value;
	// 	const cnf_pwd = control.value;
	// 	if(pwd !== cnf_pwd) {
	// 		return { 'confirmPasswordValidator': true };
	// 	}
	// 	return null;this.confirmPasswordValidator.bind(this)
	// }
	
	onSignUp() {
		const body = this.formSignUp.value;
		this.authService.signup( body )
		.subscribe(
			( response: Response ) => {
				alert( response.json().message );
			},
			( error: Response ) => console.log( error ),
			() => this.formSignUp.reset()
		);
	}
	
	onReset() {
		this.formSignUp.reset();
	}
	
}
