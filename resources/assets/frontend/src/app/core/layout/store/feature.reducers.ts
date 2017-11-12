import { QuoteState } from './quotes/quote.reduces';
import * as fromApp from '../../store/core.reducers';
import * as fromQuote from  './quotes/quote.reduces';

export interface AfterLoginFeatureState extends fromApp.AppState {
	quote: FeatureState
}

export interface FeatureState {
	quote: QuoteState
};

export const afterLoginReducers = {
	quote: fromQuote.quoteReducer
};