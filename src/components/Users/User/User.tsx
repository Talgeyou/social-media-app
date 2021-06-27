import styles from "./User.module.scss";
import { Avatar, Button, Card } from "antd";
import { Typography } from "antd";
import { NavLink } from "react-router-dom";
import { FollowAPI } from "../../../api/api";
const { Title } = Typography;

export interface UserProps {
  user: any;
  followingInProgress: Array<number>;
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
  setFollowingInProgress: (userId: number, isFetching: boolean) => void;
}

const User = (props: UserProps) => {
  const handleFollowButtonClick = () => {
    if (props.user.followed) {
      props.setFollowingInProgress(props.user.id, true);
      FollowAPI.deleteFollow(props.user.id).then((data: any) => {
        props.setFollowingInProgress(props.user.id, false);
        if (data && data.resultCode === 0) {
          props.onUnfollow(props.user.id);
        }
      });
    } else {
      props.setFollowingInProgress(props.user.id, true);
      FollowAPI.postFollow(props.user.id).then((data: any) => {
        props.setFollowingInProgress(props.user.id, false);
        if (data && data.resultCode === 0) {
          props.onFollow(props.user.id);
        }
      });
    }
  };

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <Button
          disabled={
            props.followingInProgress.find((id) => id === props.user.id)
              ? true
              : false
          }
          type={props.user.followed ? "ghost" : "primary"}
          onClick={handleFollowButtonClick}
        >
          {props.user.followed ? "Unfollow" : "Follow"}
        </Button>,
      ]}
      title={
        <NavLink to={`/profile/${props.user.id}`} className={styles.meta}>
          <Avatar
            className={styles.avatar}
            src={
              props.user.photos.small !== null ? props.user.photos.small : ""
            }
          />
          <div className={styles.name}>{props.user.name}</div>
        </NavLink>
      }
    >
      <Card.Meta
        description={
          <Title level={3} className={styles.status}>
            {props.user.status}
          </Title>
        }
      />
    </Card>
  );
};

export default User;
