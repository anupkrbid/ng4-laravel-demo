import * as AuthActions from './auth.actions';

export interface State {
	token: string;
	isAuthenticated: boolean;
}

const initialState: State = {
	token: null,
	isAuthenticated: false
};

export function authReducer( state = initialState, action: AuthActions.AuthActions ) {
	switch ( action.type ) {
		case (AuthActions.SIGNIN_SUCCESS):
			localStorage.setItem( 'token', action.payload );
			return {
				...state,
				isAuthenticated: true,
				token: action.payload
			};
		case (AuthActions.SIGNOUT_SUCCESS):
			localStorage.removeItem( 'token' );
			return {
				...state,
				token: null,
				isAuthenticated: false
			};
		case (AuthActions.CHECK_TOKEN):
			if ( localStorage.getItem( 'token' ) !== null && localStorage.getItem( 'token' ) !== undefined ) {
				return {
					...state,
					isAuthenticated: true,
					token: localStorage.getItem( 'token' )
				};
			} else {
				return state;
			}

		case (AuthActions.SIGNUP_SUCCESS):
		default:
			return state;
	}
}