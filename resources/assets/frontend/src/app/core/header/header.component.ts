/**
 * Component to show header section and handel navigation
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/core.reducers';
import * as fromAuth from '../store/auth/auth.reducers';
import * as AuthActions from '../store/auth/auth.actions';

@Component( {
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

	/** Variable declarations */
	authState: Observable<fromAuth.State>;

	/** Service injection */
	constructor( private store: Store<fromApp.AppState> ) { }

	/** Perform task when component initializes */
	ngOnInit() {
		/** Service call to check if user is authenticated or not */
		this.authState = this.store.select( 'auth' );
		this.store.dispatch( new AuthActions.CheckToken() );
	}

	/** Function call to sign out */
	onSignOut() {
		this.store.dispatch( new AuthActions.SignOutAttempt() );
	}

}
