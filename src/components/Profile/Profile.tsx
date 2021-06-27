import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
export interface ProfileProps {
  profile: any;
}

const Profile = (props: ProfileProps) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo {...props.profile} profile={props.profile} />
      {/* <PostsContainer profile={props.profile} /> */}
    </div>
  );
};

export default Profile;
