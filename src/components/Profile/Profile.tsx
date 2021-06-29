import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";

export interface ProfileProps {
  profile?: any;
  isAuth: boolean;
  authUserId: number | null;
  status: string;
  updateUserStatus: (status: string) => void;
}

const Profile = (props: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo
        {...props.profile}
        authUserId={props.authUserId}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
      {/* <PostsContainer profile={props.profile} /> */}
    </div>
  );
};

export default Profile;
