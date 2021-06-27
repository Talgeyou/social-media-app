import { ProfileAPI } from "../api/api";

export const addPostActionType = "ADD-POST";
export const updateNewPostTextActionType = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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

interface ProfileState {
  profile: Profile | null;
  isFetching: boolean;
}

const initialState: ProfileState = {
  profile: null,
  isFetching: false,
};

const profilesReducer = (state: ProfileState = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: { ...action.profile } };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.status };
    default:
      return state;
  }
};

export default profilesReducer;

export const addPostActionCreator = (
  profileId: number,
  author: {
    id: number;
    name: string;
    imgUrl?: string;
  }
) => ({
  type: addPostActionType,
  profileId: profileId,
  author: author,
});

export const updateNewPostTextActionCreator = (
  profileId: number,
  postText: string
) => ({
  type: updateNewPostTextActionType,
  profileId: profileId,
  postText: postText,
});

export const setUserProfile = (profile: number) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setIsFetching = (status: boolean) => ({
  type: SET_IS_FETCHING,
  status,
});

export const getUserProfileThunkCreator = (userId: number) => {
  return (dispatch: any) => {
    dispatch(setIsFetching(true));

    ProfileAPI.getProfile(userId).then((data: any) => {
      dispatch(setIsFetching(false));
      dispatch(setUserProfile(data));
    });
  };
};
