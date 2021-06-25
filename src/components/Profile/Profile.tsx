import { useParams } from "react-router-dom";
import Posts, { Post } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.scss";
import Title from "antd/lib/typography/Title";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd";

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
    newPostText: string;
    posts?: Array<Post>;
  }>;
  onNewPostTextChange: (profileId: number, postText: string) => void;
  addPost: (
    profileId: number,
    author: { id: number; name: string; imgUrl?: string }
  ) => void;
}

const Profile = (props: ProfileProps) => {
  const { id } = useParams<ParamTypes>();

  if (id) {
    const profile = id
      ? props.profiles.find((profile) => profile.user.id === +id)
      : undefined;

    if (profile) {
      const handleNewPostTextChange = (e: { target: { value: any } }) => {
        let postText = e.target.value;
        props.onNewPostTextChange(profile.user.id, postText);
      };

      const addPost = () => {
        let user = {
          id: 0,
          name: "Talge",
          imgUrl: "https://s.ppy.sh/a/9200248",
        };
        props.addPost(profile.user.id, user);
      };
      if (id && profile) {
        return (
          <div className={styles.profile}>
            <ProfileInfo user={profile.user} />
            <div className={styles.profileAddPost}>
              <TextArea
                rows={3}
                value={profile.newPostText}
                onChange={handleNewPostTextChange}
              />
              <Button type="primary" onClick={addPost}>
                Add Post
              </Button>
            </div>
            <Posts posts={profile.posts} />
          </div>
        );
      }
    }
  }
  return <Title>There is no such user</Title>;
};

export default Profile;
