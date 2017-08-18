import {Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean;
  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.authService.loggedIn.subscribe(
      () => {
        this.isLoggedIn = this.authService.isAuthenticated();
      }
    );
  }

  // isAuthenticated: boolean = this.authService.isAuthenticated();
  onSignOut() {
    const token = this.authService.getToken();
    this.authService.signout(token).subscribe(
      (response: Response) => {
        alert(response.json().message);
        localStorage.removeItem('token');
      },
      (error: Response) => console.log(error),
      () => {
        this.authService.loggedIn.next();
        this.router.navigate(['/sign-in']);
      }
    );
  }
}
