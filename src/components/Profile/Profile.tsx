import { useParams } from "react-router-dom";
import Posts, { Post } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
import Title from "antd/lib/typography/Title";

export interface ParamTypes {
  id: string | undefined;
}

export interface ProfileProps {
  profiles: Array<{
    user: {
      id: number;
      name: string;
      description?: string;
      imgUrl?: string;
    };
    posts?: Array<Post>;
  }>;
}

const Profile = (props: ProfileProps) => {
  const { id } = useParams<ParamTypes>();
  if (id) {
    const profile = props.profiles.find((profile) => profile.user.id === +id);
    console.log([id, profile]);
    if (profile) {
      return (
        <div className={styles.profile}>
          <ProfileInfo user={profile.user} />
          <Posts posts={profile.posts} />
        </div>
      );
    }
  }

  return <Title>There is no such user</Title>;
};

export default Profile;
