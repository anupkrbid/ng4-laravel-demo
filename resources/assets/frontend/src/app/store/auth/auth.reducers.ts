import * as AuthActions from './auth.actions';

export interface State {
    token: string,
    isAuthenticated: boolean
}

const initialState: State = {
    token: null,
    isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions.Actions) {
    switch (action.type) {

        case (AuthActions.SIGNIN):
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            };

        case (AuthActions.SIGNOUT):
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };

        case (AuthActions.SIGNUP):
        default:
            return state;

    }
}