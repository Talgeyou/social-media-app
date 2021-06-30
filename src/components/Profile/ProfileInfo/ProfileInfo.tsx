import styles from "./ProfileInfo.module.scss";
import { Image, Descriptions } from "antd";
import Contacts from "./Contacts/Contacts";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

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
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string;
  updateUserStatus: (status: string) => void;
}

const ProfileInfo = ({
  authUserId,
  aboutMe,
  contacts,
  lookingForAJob,
  lookingForAJobDescription,
  fullName,
  userId,
  photos,
  status,
  updateUserStatus,
}: ProfileInfoProps) => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <div className={styles.avatar}>
          {photos && photos.large ? (
            <Image
              preview={false}
              src={photos.large}
              width={300}
              height={300}
            />
          ) : (
            <UserOutlined width={300} height={300} />
          )}
        </div>
      </div>
      <div className={styles.profileMeta}>
        <Descriptions title={fullName} column={1}>
          <Descriptions.Item label="Status">
            <ProfileStatus
              profileUserId={userId}
              authUserId={authUserId}
              status={status}
              updateUserStatus={updateUserStatus}
            />
            <Descriptions.Item label="About">
              <p>{aboutMe}</p>
            </Descriptions.Item>
          </Descriptions.Item>
          <Descriptions.Item label="Looking for a Job">
            {lookingForAJob
              ? `Looking for a Job 
                ${
                  lookingForAJobDescription
                    ? `(${lookingForAJobDescription})`
                    : ""
                }`
              : "Doesn't Looking for a Job"}
          </Descriptions.Item>
        </Descriptions>
        <Contacts {...contacts} />
      </div>
    </div>
  );
};

export default React.memo(ProfileInfo);
