import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
import React from "react";
import PostsContainer from "./Posts/PostsContainer";

export interface ProfileProps {
  profile?: any;
  isAuth: boolean;
  authUserId: number | null;
  status: string;
  updateUserStatus: (status: string) => void;
}

const Profile = ({
  profile,
  isAuth,
  authUserId,
  status,
  updateUserStatus,
}: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo
        {...profile}
        authUserId={authUserId}
        status={status}
        updateUserStatus={updateUserStatus}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
