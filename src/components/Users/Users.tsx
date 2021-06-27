import { Pagination } from "antd";
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
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setFollowingInProgress: (userId: number, isFetching: boolean) => void;
}

const Users = (props: UsersProps) => {
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
            onFollow={props.follow}
            onUnfollow={props.unfollow}
            setFollowingInProgress={props.setFollowingInProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
