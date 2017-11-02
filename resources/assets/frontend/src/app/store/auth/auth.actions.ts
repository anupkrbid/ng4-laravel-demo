import { Action } from "@ngrx/store";

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';

export class SignUp implements Action {
    readonly type = SIGNUP;
}

export class SignIn implements Action {
    readonly type = SIGNIN;
    constructor(public payload: string) {}
}

export class SignOut implements Action {
    readonly type = SIGNOUT;
}

export type Actions = SignUp | SignIn | SignOut;