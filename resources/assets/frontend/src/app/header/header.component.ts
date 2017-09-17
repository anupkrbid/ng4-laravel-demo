/**
 * Component to show header section and handel navigation
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	/** Variable declarations */
  isLoggedIn: boolean;
  loggedInSubscription: Subscription;

	/** Service injection */
  constructor( private authService: AuthService,
               private router: Router ) { }

	/** Perform task when component initializes */
  ngOnInit() {

		/** Service call to check if user is authenticated or not */
    this.isLoggedIn = this.authService.isAuthenticated();
    this.loggedInSubscription = this.authService.loggedIn.subscribe(
      () => {
        this.isLoggedIn = this.authService.isAuthenticated();
      }
    );

  }

	/** Function call to sign out */
  onSignOut() {

    const token = this.authService.getToken();

		/** Service call to sign out */
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

	/** Un-subscribing from custom subscription to prevent memory leak when the component will get destroyed */
	ngOnDestroy() { this.loggedInSubscription.unsubscribe(); }

}
