import styles from "./ProfileInfo.module.scss";
import { Image, Descriptions } from "antd";
import Contacts from "./Contacts/Contacts";
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

export interface ProfileInfoProps {
  authUserId: number | null;
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullname: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string;
  updateUserStatus: (status: string) => void;
}

const ProfileInfo = (props: any) => {
  if (props.isFetching) {
    return <Preloader />;
  }

  return (
    <div className={styles.profileInfo}>
      <div>
        {props.photos && props.photos.large ? (
          <Image
            preview={false}
            className={styles.avatar}
            src={props.photos.large}
            width={300}
          />
        ) : (
          ""
        )}
        <ProfileStatus
          profileUserId={props.userId}
          authUserId={props.authUserId}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
      <div className={styles.profileMeta}>
        <Descriptions title={props.fullName} column={1}>
          <Descriptions.Item label="About">
            <p>{props.aboutMe}</p>
          </Descriptions.Item>
          <Descriptions.Item label="Looking for a Job">
            {props.lookingForAJob
              ? `Looking for a Job 
                ${
                  props.lookingForAJobDescription
                    ? `(${props.lookingForAJobDescription})`
                    : ""
                }`
              : "Doesn't Looking for a Job"}
          </Descriptions.Item>
        </Descriptions>
        <Contacts {...props.contacts} />
      </div>
    </div>
  );
};

export default ProfileInfo;
