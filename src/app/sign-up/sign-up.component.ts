import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit() { }

  onSignUp(formSignUp: NgForm) {
    const body = {
      name: formSignUp.value.name,
      email: formSignUp.value.email,
      password: formSignUp.value.password
    };
    this.authService.signup(body)
      .subscribe(
        (response: Response) => {
          alert(response.json().message);
        },
        (error: Response) => console.log(error),
        () => formSignUp.reset()
      );
  }

  onReset(formSignUp: NgForm) {
    formSignUp.reset();
  }

}
