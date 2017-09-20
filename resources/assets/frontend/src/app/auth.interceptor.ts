/**
 * Interceptor to intercept all response that arrive and check for error response and take specific actions depending upon status codes
 */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	private authService: AuthService;
	constructor( private router: Router, injector:Injector ) {
		setTimeout(() => this.authService = injector.get(AuthService));
	}

	intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
		return next.handle( req )
			.do(
				( event: HttpEvent<any> ) => {
					if ( event instanceof HttpResponse ) {
						// do stuff with response if you want
					}
				},
				( err: any ) => {
					if ( err instanceof HttpErrorResponse ) {
							console.log(err.status);

						if ( err.status === 401 || err.status === 400 ) {

							localStorage.removeItem( 'token' );
							this.authService.loggedIn.next();
							this.router.navigate( [ '/sign-in' ] );

						}

					}
				}
			);
	}

}