import { authMeThunkCreator } from "./authReducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

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

export const initializeAppThunkCreator = () => (dispatch: any) => {
  dispatch(authMeThunkCreator()).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
