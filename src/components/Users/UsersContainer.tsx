import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  followUserThunkCreator,
  getUsersThunkCreator,
  unfollowUserThunkCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFetchingStatus,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

interface Props {
  users: Array<any>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  getUsers: (currentPage: number, pageSize: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const UsersContainer = ({
  users,
  totalCount,
  pageSize,
  currentPage,
  isFetching,
  followingInProgress,
  getUsers,
  followUser,
  unfollowUser,
}: Props) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize]);

  const handleChangePage = (pageNumber: number, newPageSize?: number) => {
    getUsers(pageNumber, newPageSize ? newPageSize : pageSize);
  };

  return (
    <Users
      users={users}
      totalCount={totalCount}
      pageSize={pageSize}
      currentPage={currentPage}
      isFetching={isFetching}
      followingInProgress={followingInProgress}
      changePage={handleChangePage}
      followUser={followUser}
      unfollowUser={unfollowUser}
    >
      {isFetching ? <Preloader /> : ""}
    </Users>
  );
};

const mapStateToProps = (state: any) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetchingStatus(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<any>(
  connect(mapStateToProps, {
    followUser: followUserThunkCreator,
    unfollowUser: unfollowUserThunkCreator,
    getUsers: getUsersThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);
