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
  changePage: (page: number, newPageSize?: number) => void;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const Users = ({
  children,
  users,
  currentPage,
  totalCount,
  pageSize,
  isFetching,
  followingInProgress,
  changePage,
  followUser,
  unfollowUser,
}: UsersProps) => {
  return (
    <div className={styles.users}>
      <Pagination
        disabled={isFetching}
        current={currentPage}
        total={totalCount}
        onChange={changePage}
        pageSize={pageSize}
      />
      {children}
      <div className={styles.users__list}>
        {users.map((user) => (
          <User
            key={user.id}
            user={user}
            followingInProgress={followingInProgress}
            followUser={followUser}
            unfollowUser={unfollowUser}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Users);
