import moment from "moment";
import { ProfileAPI } from "../api/api";

export const ADD_POST = "samurai/profiles/ADD_POST";
const SET_USER_PROFILE = "samurai/profiles/SET_USER_PROFILE";
const SET_IS_FETCHING = "samurai/profiles/SET_IS_FETCHING";
const SET_STATUS = "samurai/profiles/SET_STATUS";

interface Profile {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: {
    small: string | null;
    large: string | null;
  };
  aboutMe: string | null;
}

interface Post {
  id: number;
  author: {
    id?: number;
    name?: string;
    imgUrl?: string | null;
  };
  body: string;
  creationDate: string;
}

interface ProfileState {
  profile: Profile | null;
  isFetching: boolean;
  status: string | null;
  posts: Array<Post>;
}

const initialState: ProfileState = {
  profile: null,
  isFetching: false,
  status: "",
  posts: [],
};

const profilesReducer = (state: ProfileState = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            author: {
              id: state.profile?.userId,
              name: state.profile?.fullName,
              imgUrl: state.profile?.photos.small,
            },
            body: action.postText,
            creationDate: moment().toString(),
          },
        ],
      };
    case SET_USER_PROFILE:
      return { ...state, profile: { ...action.profile } };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.status };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default profilesReducer;

export const addPost = (postText: string) => ({
  type: ADD_POST,
  postText,
});

export const setUserProfile = (profile: number) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setIsFetching = (status: boolean) => ({
  type: SET_IS_FETCHING,
  status,
});

export const setStatus = (status: string) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfileThunkCreator =
  (userId: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));

    const data = await ProfileAPI.getProfile(userId);

    dispatch(setIsFetching(false));
    dispatch(setUserProfile(data));
  };

export const getUserStatusThunkCreator =
  (userId: number) => async (dispatch: any) => {
    const data = await ProfileAPI.getStatus(userId);
    dispatch(setStatus(data ? data : ""));
  };

export const updateUserStatusThunkCreator =
  (status: string) => async (dispatch: any) => {
    const response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
