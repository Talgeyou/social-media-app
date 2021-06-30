import { AuthAPI } from "../api/api";

const SET_USER_DATA = "samurai/auth/SET_USER_DATA";
const LOG_IN = "samurai/auth/LOG_IN";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: action.isAuth };
    default:
      return state;
  }
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: SET_USER_DATA,
    data: { userId, email, login },
    isAuth,
  };
};

const authMe = async (dispatch: any) => {
  let response = await AuthAPI.authMe();

  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  } else {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const authMeThunkCreator = () => authMe;

export const logInThunkCreator =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: any) => {
    let response = await AuthAPI.logIn(email, password, rememberMe);

    if (response.resultCode === 0) {
      authMe(dispatch);
    }
  };

export const logOutThunkCreator = () => async (dispatch: any) => {
  let response = await AuthAPI.logOut();

  if (response.resultCode === 0) {
    authMe(dispatch);
  }
};

export default authReducer;
