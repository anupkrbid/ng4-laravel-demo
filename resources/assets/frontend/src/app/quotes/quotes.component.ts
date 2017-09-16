import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { QuoteInterface } from '../quote.interface';
import { QuoteService } from '../quote.service';
import { QuoteModel } from '../quote.model';

@Component( {
	selector: 'app-quotes',
	templateUrl: './quotes.component.html',
	styleUrls: [ './quotes.component.css' ]
} )
export class QuotesComponent implements OnInit {

	quotes: QuoteInterface[];

	constructor( private quoteService: QuoteService ) { }

	ngOnInit() {

		this.quoteService.quotesNeedToUpdate.subscribe(
			() => {
				this.quoteService.getQuotes()
					.subscribe(
						( res: { success: boolean, data: QuoteModel[] } ) => {
							console.log( 'Data Fetched!' );
						},
						( err: HttpErrorResponse ) => console.log( err )
					);
			}
		);

	}

	onFetchQuotes() {

		this.quoteService.quotesNeedToUpdate.next();

	}

}
