import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { environment } from '../environments/environment';
import { QuoteModel } from './quote.model';

@Injectable()
export class QuoteService {

	quotesNeedToUpdate = new Subject();

	constructor( private httpClient: HttpClient ) { }

	getQuotes(): Observable<any> {

		const apiUrl = environment.BASE_URL + 'get-quotes';

		return this.httpClient.get<QuoteModel[]>( apiUrl );

	}

	addQuote( data: { content: string }, token: string ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'add-quote';
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	editQuote( id: number, data: { content: string }, token: string ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'edit-quote/' + id;
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.put( apiUrl, data, config );

	}

	deleteQuote( id: number, token: string ): Observable<any> {

		const apiUrl = environment.BASE_URL + 'delete-quote/' + id;
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.delete( apiUrl, config );

	}

}
