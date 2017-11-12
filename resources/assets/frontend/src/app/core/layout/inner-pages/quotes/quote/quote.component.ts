/**
 * Component to display, edit and delete each quote
 */
import { Component, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../../../../auth/auth.service';
import { QuoteModel } from './quote.model';
import { QuoteService } from './quote.service';

@Component( {
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: [ './quote.component.css' ]
} )
export class QuoteComponent {

	/** Variable declarations */
	editMode: boolean = false;
	editedValue: string = '';

	/** Listening for values from parent component */
	@Input() quote: QuoteModel;

	/** Service injection */
	constructor( private authService: AuthService,
	             private quoteService: QuoteService ) { }

  /** Function call to start editing a quote */
	onEdit() { this.editMode = true; }

	/** Function call to cancel editing a quote */
	onCancel() {

		this.editMode = false;
		this.editedValue = '';

	}

	/** Function call to submit the new edited value for a quote */
	onSave() {

		/** Service call to get token */
		const token = this.authService.getToken();
		const obj = {
			content: this.editedValue
		};

		/** Service call to edit quote */
		this.quoteService.editQuote( this.quote.id, obj, token )
			.subscribe(
				( res: { success: boolean, message: string } ) => {
					this.quoteService.quotesNeedToUpdate.next();
					alert( res.message );
				},
				( err: HttpErrorResponse ) => console.log( err ),
				() => {
					this.editMode = false;
					this.editedValue = '';
				}
			);

	}

	/** Function call to delete a quote */
	onDelete() {

		/** Service call to get token */
		const token = this.authService.getToken();

		/** Service call to delete a quote */
		this.quoteService.deleteQuote( this.quote.id, token )
			.subscribe(
				( response: { success: boolean, message: string } ) => {
					this.quoteService.quotesNeedToUpdate.next();
					alert( response.message );
				},
				( error: HttpErrorResponse ) => console.log( error )
			);

	}

}
