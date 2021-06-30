import { authMeThunkCreator } from "./authReducer";

const INITIALIZING_SUCCESS = "samurai/app/INITIALIZING_SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INITIALIZING_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZING_SUCCESS });

export const initializeAppThunkCreator = () => async (dispatch: any) => {
  await dispatch(authMeThunkCreator());

  dispatch(initializedSuccess());
};

export default appReducer;
