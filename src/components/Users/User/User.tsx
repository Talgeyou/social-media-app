import styles from "./User.module.scss";
import { Avatar, Button, Card } from "antd";
import { Typography } from "antd";
import { NavLink } from "react-router-dom";
const { Title } = Typography;

export interface UserProps {
  user: any;
  followingInProgress: Array<number>;
  followUser: (userId: number) => void;
  unfollowUser: (userId: number) => void;
}

const User = (props: UserProps) => {
  const handleFollowButtonClick = () => {
    if (props.user.followed) {
      props.unfollowUser(props.user.id);
    } else {
      props.followUser(props.user.id);
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
