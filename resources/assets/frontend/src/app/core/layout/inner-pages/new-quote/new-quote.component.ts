/**
 * Component to add a new quote
 */
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../../auth/auth.service';
import { QuoteService } from '../quotes/quote.service';

@Component( {
	selector: 'app-new-quote',
	templateUrl: './new-quote.component.html',
	styleUrls: [ './new-quote.component.css' ]
} )
export class NewQuoteComponent {

	/** Service injection */
	constructor( private quoteService: QuoteService,
	             private authService: AuthService ) { }

	/** Function call to submit form */
	onSubmit( form: NgForm ) {

		const obj = {
			content: form.value.content
		};

		/** Service call to get token */
		const token = this.authService.getToken();

		/** Service call to add a new quote */
		this.quoteService.addQuote( obj, token )
			.subscribe(
				( res: { success: boolean, message: string } ) => {
					alert( res.message );
				},
				( err: HttpErrorResponse ) => console.log( err ),
				() => form.reset()
			);

	}

	/** Function call to reset form */
	onCancel( form: NgForm ) { form.reset(); }

}
