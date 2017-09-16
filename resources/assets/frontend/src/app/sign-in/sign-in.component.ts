import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() { }

	onSignIn(formSignIn: NgForm) {
		const body = {
			email: formSignIn.value.email,
			password: formSignIn.value.password
		};
		this.authService.signin(body)
			.subscribe(
				(response: Response) => {
					localStorage.setItem('token', response.json().token);
					alert(response.json().message);
				},
				(error: Response) => console.log(error),
				() => {
					this.authService.loggedIn.next();
					formSignIn.reset();
					this.router.navigate(['/quotes']);
				}
			);
	}

	onReset(formSignIn: NgForm) {
		formSignIn.reset();
	}

}
