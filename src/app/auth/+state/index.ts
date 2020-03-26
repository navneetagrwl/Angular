import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as login from 'src/app/auth/login/+state/login.reducer';


export interface AuthState {
  login: login.State;
}

export const reducer =  {
  login: login.reducer
};

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getLoginState = createSelector(getAuthState, (state: AuthState) => state.login);

export const getLoginCred = createSelector(getLoginState, login.getLoginCred);
