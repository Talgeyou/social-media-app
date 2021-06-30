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

const User = ({
  user,
  followingInProgress,
  followUser,
  unfollowUser,
}: UserProps) => {
  const handleFollowButtonClick = () => {
    if (user.followed) {
      unfollowUser(user.id);
    } else {
      followUser(user.id);
    }
  };

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <Button
          disabled={
            followingInProgress.find((id) => id === user.id) ? true : false
          }
          type={user.followed ? "ghost" : "primary"}
          onClick={handleFollowButtonClick}
        >
          {user.followed ? "Unfollow" : "Follow"}
        </Button>,
      ]}
      title={
        <NavLink to={`/profile/${user.id}`} className={styles.meta}>
          <Avatar
            className={styles.avatar}
            src={user.photos.small !== null ? user.photos.small : ""}
          />
          <div className={styles.name}>{user.name}</div>
        </NavLink>
      }
    >
      <Card.Meta
        description={
          <Title level={3} className={styles.status}>
            {user.status}
          </Title>
        }
      />
    </Card>
  );
};

export default User;
