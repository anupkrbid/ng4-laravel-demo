/**
 * Service that will handel all ( CRUD ) related quotes api calls
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../../../../../environments/environment';
import { QuoteModel } from './quote.model';

@Injectable()
export class QuoteService {

	/** Initializing custom observables */
	quotesNeedToUpdate = new Subject();

	/** Service injection */
	constructor( private httpClient: HttpClient ) { }

	/** Api call to get all quotes */
	getQuotes(): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'get-quotes';

		return this.httpClient.get<QuoteModel[]>( apiUrl );

	}

	/** Api call to add a new quote */
	addQuote( data: { content: string }, token: string ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'add-quote';
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.post( apiUrl, data, config );

	}

	/** Api call to edit an existing quote */
	editQuote( id: number, data: { content: string }, token: string ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'edit-quote/' + id;
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.put( apiUrl, data, config );

	}

	/** Api call to delete an existing quote */
	deleteQuote( id: number, token: string ): Observable<any> {

		const apiUrl = environment.API_BASE_URL + 'delete-quote/' + id;
		const params = new HttpParams().set('token', token);
		const config = {
			params: params
		};

		return this.httpClient.delete( apiUrl, config );

	}

}
