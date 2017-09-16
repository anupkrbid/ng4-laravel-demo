import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  onSignOut() {

    const token = this.authService.getToken();

    this.authService.signout(token)
	    .subscribe(
      (res: any) => {
        console.log(res.message);
        localStorage.removeItem('token');
      },
      (err: HttpErrorResponse) => console.log(err),
      () => {
        this.authService.loggedIn.next();
        this.router.navigate(['/sign-in']);
      }
    );

  }

}
