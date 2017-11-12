/**
 * Component to show a list of all quotes
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { QuoteInterface } from './quote/quote.interface';
import { QuoteModel } from './quote/quote.model';
import { QuoteService } from './quote/quote.service';
import { Store } from '@ngrx/store';
import * as fromQuote from '../../store/quotes/quote.reduces';
import * as QuoteAction from '../../store/quotes/quote.actions';
import { Observable } from 'rxjs/Observable';

@Component( {
	selector: 'app-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: [ './quotes.component.css' ]
} )
export class QuotesComponent implements OnInit, OnDestroy {

	/** Variable declarations */
//	quotes: QuoteInterface[];
	quotesNeedToUpdateSubscription: Subscription;
	quotes: Observable<fromQuote.QuoteState>;
	/** Service injection */
	constructor(private store: Store<fromQuote.QuoteState>) { }

	/** Perform task when component initializes */
	ngOnInit() {

		quotes = this.store.select('quote');
		/** Subscribing to custom observables to update quotes list */
		// this.quotesNeedToUpdateSubscription = this.quoteService.quotesNeedToUpdate
		// 	.subscribe(
		// 	() => {
		// 		this.quoteService.getQuotes()
		// 			.subscribe(
		// 				( res: { success: boolean, data: QuoteModel[] } ) => {
		// 					console.log( 'Data Fetched!' );
		// 					this.quotes = res.data;
		// 				},
		// 				( err: HttpErrorResponse ) => console.log( err )
		// 			);
		// 	}
		// );

	}

	/** Function call to fetch quotes */
	onFetchQuotes() {
		this.store.dispatch(new QuoteAction.FetchQuotesAttept());
	}

	/** Un-subscribing from custom subscription to prevent memory leak when the component will get destroyed */
	ngOnDestroy() { this.quotesNeedToUpdateSubscription.unsubscribe(); }

}
