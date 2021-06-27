import styles from "./ProfileInfo.module.scss";
import { Image, Descriptions } from "antd";
import Contacts from "./Contacts/Contacts";
import Preloader from "../../common/Preloader";

export interface ProfileInfoProps {}

const ProfileInfo = (props: any) => {
  if (!props.profile || props.isFetching) {
    return <Preloader />;
  }

  return (
    <div className={styles.profileInfo}>
      {props.photos.large ? (
        <Image
          preview={false}
          className={styles.avatar}
          src={props.photos.large}
          width={300}
        />
      ) : (
        ""
      )}
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
