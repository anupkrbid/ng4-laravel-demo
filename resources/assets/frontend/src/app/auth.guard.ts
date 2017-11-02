/**
 * Guard to prevent unauthorized users to visit routes that are only allowed to logged in users
 */
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import * as fromApp from './store/app.reducers';
import * as fromAuth from './store/auth/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

	/** Service injection */
	constructor( private store: Store<fromApp.AppState>,
	             private router: Router ) { }

	canActivate( next: ActivatedRouteSnapshot,
	             state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

		return this.store.select( 'auth' )
			.map( ( authState: fromAuth.State ) => {
				if ( authState.isAuthenticated ) {
					return true;
				} else {
					this.router.navigate( [ '/' ] );
					return false;
				}
			} );
	}
}
