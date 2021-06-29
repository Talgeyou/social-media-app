import React from "react";
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

interface UsersContainerProps {
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

class UsersContainer extends React.Component<UsersContainerProps> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  handleChangePage = (pageNumber: number, pageSize?: number) => {
    this.props.getUsers(pageNumber, pageSize ? pageSize : this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        changePage={this.handleChangePage}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      >
        {this.props.isFetching ? <Preloader /> : ""}
      </Users>
    );
  }
}

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
