import { Action } from '@ngrx/store';
import { QuoteModel } from '../../inner-pages/quotes/quote/quote.model';

export const FETCH_QUOTES_ATTEMPT = 'FETCH_QUOTES_ATTEMPT';
export const FETCH_QUOTES_SUCCESS =  'FETCH_QUOTES_SUCCESS';
export const ADD_QUOTES_ATTEMPT =  'ADD_QUOTES_ATTEMPT';
//export const ADD_QUOTES_SUCCESS =  'ADD_QUOTES_SUCCESS';
export const EDIT_QUOTES_ATTEMPT =  'EDIT_QUOTES_ATTEMPT';
//export const EDIT_QUOTES_SUCCESS =  'EDIT_QUOTES_SUCCESS';
export const DELETE_QUOTES_ATTEMPT =  'DELETE_QUOTES_ATTEMPT';
//export const DELETE_QUOTES_SUCCESS =  'DELETE_QUOTES_SUCCESS';

export class FetchQuotesAttept implements Action {
	readonly type = FETCH_QUOTES_ATTEMPT;
}

export class FetchQuotesSuccess implements Action {
	readonly type = FETCH_QUOTES_SUCCESS;
	constructor(public payload: any) {}
}

export class AddQuotesAttept implements Action {
	readonly type = FETCH_QUOTES_SUCCESS;
	constructor(public payload: string) {}
}

export class EditQuotesAttept implements Action {
	readonly type = FETCH_QUOTES_SUCCESS;
	constructor(public payload: QuoteModel) {}
}

export class DeleteQuotesAttept implements Action {
	readonly type = FETCH_QUOTES_SUCCESS;
	constructor(public payload: number) {}
}

export type QuoteActions = FetchQuotesAttept | FetchQuotesSuccess | AddQuotesAttept | EditQuotesAttept | DeleteQuotesAttept;