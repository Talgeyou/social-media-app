import styles from "./User.module.scss";
import { Avatar, Button, Card } from "antd";
import { Typography } from "antd";
import { NavLink } from "react-router-dom";
const { Title } = Typography;

export interface UserProps {
  user: any;
  onFollow: (userId: number) => void;
  onUnfollow: (userId: number) => void;
}

const User = (props: UserProps) => {
  const handleFollowButtonClick = () => {
    props.user.followed
      ? props.onUnfollow(props.user.id)
      : props.onFollow(props.user.id);
  };

  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <Button
          type={props.user.followed ? "default" : "primary"}
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
      //   extra={
      //     <div className={styles.location}>
      //       <div className={styles.location__city}>
      //         {props.user.location.city}
      //       </div>
      //       <div className={styles.location__country}>
      //         {props.user.location.country}
      //       </div>
      //     </div>
      //   }
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
