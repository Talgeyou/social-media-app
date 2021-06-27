import { useEffect } from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setPageSize,
  setTotalUsersCount,
  setUsers,
  unfollow,
  setFollowingInProgress,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { UsersAPI } from "../../api/api";

interface UsersContainerComponentProps {
  users: Array<any>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  setUsers: (users: Array<any>) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  setPageSize: (pageSize: number) => void;
  setIsFetching: (status: boolean) => void;
  setFollowingInProgress: (userId: number, isFetching: boolean) => void;
}

const UsersContainerComponent = (props: UsersContainerComponentProps) => {
  useEffect(() => {
    if (props.users && props.users.length < 1) {
      if (!props.isFetching) {
        props.setIsFetching(true);
        UsersAPI.getUsers(props.currentPage, props.pageSize).then(
          (data: any) => {
            props.setIsFetching(false);
            props.setUsers(data.items);
            props.setTotalUsersCount(data.totalCount);
            props.setCurrentPage(1);
          }
        );
      }
    }
  });

  const handleChangePage = (pageNumber: number, pageSize?: number) => {
    if (!props.isFetching) {
      props.setIsFetching(true);
      UsersAPI.getUsers(pageNumber, pageSize ? pageSize : props.pageSize).then(
        (data: any) => {
          props.setIsFetching(false);
          if (pageSize) {
            props.setPageSize(pageSize);
          }
          props.setTotalUsersCount(data.totalCount);
          props.setCurrentPage(pageNumber);
          props.setUsers(data.items);
        }
      );
    }
  };

  return (
    <Users
      users={props.users}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      isFetching={props.isFetching}
      followingInProgress={props.followingInProgress}
      unfollow={props.unfollow}
      follow={props.follow}
      changePage={handleChangePage}
      setFollowingInProgress={props.setFollowingInProgress}
    >
      {props.isFetching ? <Preloader /> : ""}
    </Users>
  );
};

const mapStateToProps = (state: any) => {
  return {
    users: state.users.items,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setPageSize,
  setIsFetching,
  setFollowingInProgress,
})(UsersContainerComponent);
