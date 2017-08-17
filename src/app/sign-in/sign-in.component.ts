import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() { }

  onSignIn(formSignIn: NgForm) {
    const body = {
      email: formSignIn.value.email,
      password: formSignIn.value.password
    };
    this.authService.signin(body)
      .subscribe(
        (response: Response) => {
          console.log(response.json());
          alert(response.json().message);
        },
        (error: Response) => console.log(error),
        () => formSignIn.reset()
      );
  }

  onReset(formSignIn: NgForm) {
    formSignIn.reset();
  }

}
