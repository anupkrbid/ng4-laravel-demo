import { QuoteState } from './quotes/quote.reduces';
import * as fromApp from '../../store/core.reducers';
import * as fromQuote from  './quotes/quote.reduces';
import { ActionReducerMap } from '@ngrx/store';

export interface AfterLoginFeatureState extends fromApp.AppState {
	featureState: FeatureState
}

export interface FeatureState {
	quote: QuoteState
}

export const afterLoginReducers: ActionReducerMap<FeatureState> = {
	quote: fromQuote.quoteReducer
};