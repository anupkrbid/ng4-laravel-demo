/**
 * Component to show a list of all quotes
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { QuoteInterface } from '../quote.interface';
import { QuoteModel } from '../quote.model';
import { QuoteService } from '../quote.service';

@Component( {
	selector: 'app-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: [ './quotes.component.css' ]
} )
export class QuotesComponent implements OnInit, OnDestroy {

	/** Variable declarations */
	quotes: QuoteInterface[];
	quotesNeedToUpdateSubscription: Subscription;

	/** Service injection */
	constructor( private quoteService: QuoteService ) { }

	/** Perform task when component initializes */
	ngOnInit() {

		/** Subscribing to custom observables to update quotes list */
		this.quotesNeedToUpdateSubscription = this.quoteService.quotesNeedToUpdate
			.subscribe(
			() => {
				this.quoteService.getQuotes()
					.subscribe(
						( res: { success: boolean, data: QuoteModel[] } ) => {
							console.log( 'Data Fetched!' );
							this.quotes = res.data;
						},
						( err: HttpErrorResponse ) => console.log( err )
					);
			}
		);

	}

	/** Function call to fetch quotes */
	onFetchQuotes() { this.quoteService.quotesNeedToUpdate.next(); }

	/** Un-subscribing from custom subscription to prevent memory leak when the component will get destroyed */
	ngOnDestroy() { this.quotesNeedToUpdateSubscription.unsubscribe(); }

}
