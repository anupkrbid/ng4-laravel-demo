import { ActionReducerMap } from '@ngrx/store';

import * as fromAlert from './alert/alert.reducers';
import * as fromAuth from './auth/auth.reducers';

export interface AppState {
	alert: fromAlert.AlertState
	auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
	alert: fromAlert.alertReducer,
	auth: fromAuth.authReducer
};