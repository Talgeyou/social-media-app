import axios from "axios";
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
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

interface UsersContainerComponentProps {
  users: Array<any>;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  setUsers: (users: Array<any>) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  setPageSize: (pageSize: number) => void;
  setIsFetching: (status: boolean) => void;
}

const UsersContainerComponent = (props: UsersContainerComponentProps) => {
  useEffect(() => {
    if (props.users.length < 1) {
      if (!props.isFetching) {
        props.setIsFetching(true);
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`
          )
          .then((res: any) => {
            props.setUsers(res.data.items);
            props.setTotalUsersCount(res.data.totalCount);
            props.setCurrentPage(1);
            props.setIsFetching(false);
          });
      }
    }
  });

  const handleChangePage = (pageNumber: number, pageSize?: number) => {
    if (!props.isFetching) {
      props.setIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`
        )
        .then((res: any) => {
          if (pageSize) {
            props.setPageSize(pageSize);
          }
          props.setTotalUsersCount(res.data.totalCount);
          props.setCurrentPage(pageNumber);
          props.setUsers(res.data.items);
          props.setIsFetching(false);
        });
    }
  };

  return (
    <Users
      users={props.users}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      unfollow={props.unfollow}
      follow={props.follow}
      changePage={handleChangePage}
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
})(UsersContainerComponent);
