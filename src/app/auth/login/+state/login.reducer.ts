import * as login from './login.actions';
import { Login } from '../../model/model';


export interface State {
  loginCred: Login;
}

export const initialState: State = {
  loginCred: { userName: '', password: '' }
};


export function reducer(state = initialState, action: login.Actions) {
  switch (action.type) {
    case login.LOGIN: {
      const loginCred = action.payload;

      return {
        ...state,
        loginCred
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoginCred = (state: State) => state.loginCred;

