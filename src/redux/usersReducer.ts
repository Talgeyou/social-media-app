import { FollowAPI, UsersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

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
  const stateCopy = { ...state };
  let user;
  switch (action.type) {
    case FOLLOW:
      stateCopy.items = [...state.items];
      user = stateCopy.items.find((u: any) => u.id === action.userId);
      if (user) {
        user.followed = true;
      }

      return { ...state, items: [...stateCopy.items] };

    case UNFOLLOW:
      stateCopy.items = [...state.items];
      user = stateCopy.items.find((u: any) => u.id === action.userId);
      if (user) {
        user.followed = false;
      }

      return { ...state, items: [...stateCopy.items] };
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

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(setIsFetching(true));

    UsersAPI.getUsers(currentPage, pageSize).then((data: any) => {
      dispatch(setIsFetching(false));
      dispatch(setPageSize(pageSize));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage));
      dispatch(setUsers(data.items));
    });
  };
};

export const followUserThunkCreator = (userId: number) => {
  return (dispatch: any) => {
    dispatch(setFollowingInProgress(userId, true));
    FollowAPI.postFollow(userId).then((data: any) => {
      dispatch(setFollowingInProgress(userId, false));
      if (data && data.resultCode === 0) {
        dispatch(acceptFollow(userId));
      }
    });
  };
};

export const unfollowUserThunkCreator = (userId: number) => {
  return (dispatch: any) => {
    dispatch(setFollowingInProgress(userId, true));
    FollowAPI.deleteFollow(userId).then((data: any) => {
      dispatch(setFollowingInProgress(userId, false));
      if (data && data.resultCode === 0) {
        dispatch(acceptUnfollow(userId));
      }
    });
  };
};

export default usersReducer;
