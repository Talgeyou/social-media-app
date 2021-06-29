export const getUsers = (state: any) => state.users.items;

export const getPageSize = (state: any) => state.users.pageSize;

export const getTotalUsersCount = (state: any) => state.users.totalCount;

export const getCurrentPage = (state: any) => state.users.currentPage;

export const getFetchingStatus = (state: any) => state.users.isFetching;

export const getFollowingInProgress = (state: any) =>
  state.users.followingInProgress;
