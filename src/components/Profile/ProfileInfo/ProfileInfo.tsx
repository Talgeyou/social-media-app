import { Image } from "antd";
import Text from "antd/lib/typography/Text";
import styles from "./ProfileInfo.module.scss";
import Title from "antd/lib/typography/Title";

export interface ProfileInfoProps {
  user: {
    id: number;
    name: string;
    description?: string;
    imgUrl?: string;
  };
}

const ProfileInfo = (props: ProfileInfoProps) => {
  if (props.user)
    return (
      <div className={styles.profileInfo}>
        {props.user.imgUrl && (
          <Image preview={false} width={256} src={props.user.imgUrl} />
        )}
        <div>
          <Title>{props.user.name}</Title>
          <Text>{props.user.description}</Text>
        </div>
      </div>
    );

  return (
    <div className={styles.error}>
      <Title>There is no user</Title>
    </div>
  );
};

export default ProfileInfo;
