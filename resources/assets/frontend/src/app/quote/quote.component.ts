import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { QuoteModel } from '../quote.model';
import { QuoteService } from '../quote.service';
import { AuthService } from '../auth.service';

@Component( {
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: [ './quote.component.css' ]
} )
export class QuoteComponent implements OnInit {

	editMode = false;
	editedValue = '';

	@Input() quote: QuoteModel;

	constructor( private authService: AuthService,
	             private quoteService: QuoteService ) { }

	ngOnInit() { }

	onEdit() {

		this.editMode = true;

	}

	onCancel() {

		this.editMode = false;
		this.editedValue = '';

	}

	onSave() {

		const token = this.authService.getToken();
		const obj = {
			content: this.editedValue
		};

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

	onDelete() {

		const token = this.authService.getToken();
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
