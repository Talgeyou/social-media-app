import { Pagination } from "antd";
import React from "react";
import User from "./User/User";
import styles from "./Users.module.scss";

export interface UsersProps {
  children: string | JSX.Element;
  users: Array<any>;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  changePage: (page: number, pageSize?: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const Users = (props: UsersProps) => {
  console.log("Users has been rendered");
  return (
    <div className={styles.users}>
      <Pagination
        disabled={props.isFetching}
        current={props.currentPage}
        total={props.totalCount}
        onChange={props.changePage}
        pageSize={props.pageSize}
      />
      {props.children}
      <div className={styles.users__list}>
        {props.users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={props.followingInProgress}
            followUser={props.followUser}
            unfollowUser={props.unfollowUser}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Users);
