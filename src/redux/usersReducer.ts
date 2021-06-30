import { FollowAPI, UsersAPI } from "../api/api";
import { updateObjectinArray } from "../utils/object-helpers";

const FOLLOW = "samurai/users/FOLLOW";
const UNFOLLOW = "samurai/users/UNFOLLOW";
const SET_USERS = "samurai/users/SET_USERS";
const SET_CURRENT_PAGE = "samurai/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "samurai/users/SET_TOTAL_USERS_COUNT";
const SET_PAGE_SIZE = "samurai/users/SET_PAGE_SIZE";
const SET_IS_FETCHING = "samurai/users/SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "samurai/users/SET_FOLLOWING_IN_PROGRESS";

interface User {
  id: number;
  name: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
}

interface Users {
  items: Array<User>;
  pageSize: number;
  totalCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
}

const initialState: Users = {
  items: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        items: updateObjectinArray(state.items, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        items: updateObjectinArray(state.items, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        items: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.status,
      };
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      };
    default:
      return state;
  }
};

export const acceptFollow = (userId: number) => ({ type: FOLLOW, userId });
export const acceptUnfollow = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsers = (users: Array<any>) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalCount: number) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const setPageSize = (pageSize: number) => ({
  type: SET_PAGE_SIZE,
  pageSize,
});
export const setIsFetching = (status: boolean) => ({
  type: SET_IS_FETCHING,
  status,
});
export const setFollowingInProgress = (
  userId: number,
  isFetching: boolean
) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  userId,
  isFetching,
});

export const getUsersThunkCreator =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));

    const data = await UsersAPI.getUsers(currentPage, pageSize);

    dispatch(setIsFetching(false));
    dispatch(setPageSize(pageSize));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(data.items));
  };

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(setFollowingInProgress(userId, true));

  const response = await apiMethod(userId);
  dispatch(setFollowingInProgress(userId, false));
  if (response && response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
};

export const followUserThunkCreator =
  (userId: number) => async (dispatch: any) => {
    const apiMethod = FollowAPI.postFollow.bind(FollowAPI);
    const actionCreator = acceptFollow;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };

export const unfollowUserThunkCreator =
  (userId: number) => async (dispatch: any) => {
    const apiMethod = FollowAPI.deleteFollow.bind(FollowAPI);
    const actionCreator = acceptUnfollow;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  };

export default usersReducer;
