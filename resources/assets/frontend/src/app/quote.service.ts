import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { environment } from '../environments/environment';

@Injectable()
export class QuoteService {

	quotesNeedToUpdate = new Subject();

	constructor( private http: Http ) { }

	getQuotes(): Observable<any> {
		return this.http.get(  environment.BASE_URL + 'get-quotes' )
			.map(
				( response: Response ) => {
					return response.json();
				}
			);
	}

	addQuote( data: { content: string }, token: string ): Observable<any> {
		return this.http.post( environment.BASE_URL + 'add-quote?token=' + token, data )
			.map(
				( response: Response ) => {
					return response.json();
				}
			);
	}

	editQuote( id: number, data: { content: string }, token: string ): Observable<any> {
		return this.http.put( environment.BASE_URL + 'edit-quote/' + id + '?token=' + token, data )
			.map(
				( response: Response ) => {
					return response.json();
				}
			);
	}

	deleteQuote( id: number, token: string ): Observable<any> {
		return this.http.delete( environment.BASE_URL + 'delete-quote/' + id + '?token=' + token )
			.map(
				( response: Response ) => {
					return response.json();
				}
			);
	}
}
