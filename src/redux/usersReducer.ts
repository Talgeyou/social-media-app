const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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
}

const initialState: Users = {
  items: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
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
    default:
      return state;
  }
};

export const follow = (userId: number) => ({ type: FOLLOW, userId });
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId });
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

export default usersReducer;
