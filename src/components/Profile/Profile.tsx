import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
import { Redirect } from "react-router-dom";

export interface ProfileProps {
  profile?: any;
  isAuth: boolean;
}

const Profile = (props: ProfileProps) => {
  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div className={styles.profile}>
      <ProfileInfo {...props.profile} profile={props.profile} />
      {/* <PostsContainer profile={props.profile} /> */}
    </div>
  );
};

export default Profile;
