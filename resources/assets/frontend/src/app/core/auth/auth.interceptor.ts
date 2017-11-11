import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/switchMap';

import * as fromApp from '../store/core.reducers';
import * as fromAuth from '../store/auth/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private store: Store<fromApp.AppState>) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// const copiedReq = req.clone({headers: req.headers.set('', '')});
		return this.store.select('auth')
			.take(1)
			.switchMap((authState: fromAuth.State) => {
				let copiedReq = req;
				if (authState.isAuthenticated) {
					copiedReq = req.clone({ params: req.params.set('token', authState.token) } );
				}
				return next.handle(copiedReq);
			})

		// return null;
	}
}
