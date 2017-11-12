import * as QuoteActions from './quote.actions';
import { QuoteModel } from '../../inner-pages/quotes/quote/quote.model';

export interface QuoteState {
	quotes: any;
}

const initialState: QuoteState = {
	quotes: []
};

export function quoteReducer(state = initialState, action: QuoteActions.QuoteActions) {
	switch(action.type) {
		case (QuoteActions.FETCH_QUOTES_SUCCESS):
			return {
				...state,
				quotes: [...action.payload]
			};
		default:
			return state;
	}
}