import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { environment } from '../../../../../environments/environment';
import { QuoteModel } from '../../inner-pages/quotes/quote/quote.model';
import * as AlertActions from '../../../store/alert/alert.actions';
import * as QuoteActions from './quote.actions';

@Injectable()
export class QuoteEffects  {

	constructor(private action$: Actions,
							private httpClient: HttpClient) {}

	@Effect()
	FetchQuotes = this.action$
		.ofType(QuoteActions.FETCH_QUOTES_ATTEMPT)
		.switchMap((action: QuoteActions.FetchQuotesAttept) => {
			const apiUrl = environment.API_BASE_URL + 'get-quotes';
			return this.httpClient.get<QuoteModel[]>( apiUrl )
				.map((res: any) => {
					if (res.status) {
						return {
							type: QuoteActions.FETCH_QUOTES_SUCCESS,
							payload: res.body
						}
					} else {
						return {
							type: AlertActions.ALERT_SHOW,
							payload: { message: res.message, type: 'danger' }
						}
					}
				})
				.catch((err: HttpErrorResponse) => {
					return of(
						{
							type: AlertActions.ALERT_SHOW,
							payload: { message: err.message, type: 'danger' }
						}
					)
				});
		})

}