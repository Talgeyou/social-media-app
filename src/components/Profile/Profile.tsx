import { useParams } from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
import Title from "antd/lib/typography/Title";
import PostsContainer from "./Posts/PostsContainer";

export interface ParamTypes {
  id: string | undefined;
}

export interface ProfileProps {
  profiles: any;
  dispatch: (action: any) => void;
}

const Profile = (props: ProfileProps) => {
  const { id } = useParams<ParamTypes>();

  if (id) {
    const profile = props.profiles.find((p: any) => p.user.id === +id);
    const posts = profile.posts.reverse();

    if (profile) {
      return (
        <div className={styles.profile}>
          <ProfileInfo user={profile.user} />
          <PostsContainer
            profileId={profile.user.id}
            posts={posts}
            newPostText={profile.newPostText}
            dispatch={props.dispatch}
          />
        </div>
      );
    }
  }
  return <Title>There is no such user</Title>;
};

export default Profile;
