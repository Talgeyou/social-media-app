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

export const UsersContainer = (props: Props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentPage, props.pageSize]);

  const handleChangePage = (pageNumber: number, pageSize?: number) => {
    props.getUsers(pageNumber, pageSize ? pageSize : props.pageSize);
  };

  return (
    <Users
      users={props.users}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      isFetching={props.isFetching}
      followingInProgress={props.followingInProgress}
      changePage={handleChangePage}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    >
      {props.isFetching ? <Preloader /> : ""}
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
