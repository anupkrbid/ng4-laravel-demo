import { Action } from '@ngrx/store';

export const SIGNUP_ATTEMPT = 'SIGNUP_ATTEMPT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNIN_ATTEMPT = 'SIGNIN_ATTEMPT';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SIGNOUT_ATTEMPT = 'SIGNOUT_ATTEMPT';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILED = 'SIGNOUT_FAILED';
export const CHECK_TOKEN = 'CHECK_TOKEN';

export class SignUpAttempt implements Action {
	readonly type = SIGNUP_ATTEMPT;
	constructor(public payload: { name: string, email: string, password: string }) {}
}

export class SignUpSuccess implements Action {
	readonly type = SIGNUP_SUCCESS;
}

export class SignUpFailed implements Action {
	readonly type = SIGNUP_FAILED;
}

export class SignInAttempt implements Action {
	readonly type = SIGNIN_ATTEMPT;
	constructor(public payload: { email: string, password: string }) {}
}

export class SignInSuccess implements Action {
	readonly type = SIGNIN_SUCCESS;
	constructor(public payload: string) {}
}

export class SignInFailed implements Action {
	readonly type = SIGNIN_FAILED;
}

export class SignOutAttempt implements Action {
	readonly type = SIGNOUT_ATTEMPT;
}

export class SignOutSuccess implements Action {
	readonly type = SIGNOUT_SUCCESS;
}

export class SignOutFailed implements Action {
	readonly type = SIGNOUT_FAILED;
}

export class CheckToken implements Action {
	readonly type = CHECK_TOKEN;
}

export type AuthActions = CheckToken |
	SignUpAttempt | SignUpSuccess | SignUpFailed |
	SignInAttempt | SignInSuccess | SignInFailed |
	SignOutAttempt | SignOutSuccess | SignOutFailed;