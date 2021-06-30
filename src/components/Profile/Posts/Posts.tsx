import { Button, List } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.scss";

export interface PostsProps {
  authUserId: number;
  profileUserId: number;
  posts: Array<any>;

  addPost: (postText: string) => void;
}

const Posts = ({ authUserId, profileUserId, posts, addPost }: PostsProps) => {
  const [newPostText, setNewPostText] = useState("");

  const postsSortedByDate = [...posts].reverse();

  const handleNewPostTextChange = (e: { target: { value: any } }) => {
    setNewPostText(e.target.value);
  };

  const handleAddPostButtonClick = () => {
    addPost(newPostText);
  };

  if (authUserId === profileUserId) {
    return (
      <div>
        {authUserId === profileUserId ? (
          <div className={styles.profileAddPost}>
            <TextArea
              rows={3}
              value={newPostText}
              placeholder={"Enter post's text"}
              onChange={handleNewPostTextChange}
            />
            <Button type="primary" onClick={handleAddPostButtonClick}>
              Add Post
            </Button>
          </div>
        ) : (
          ""
        )}
        {posts && posts.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={postsSortedByDate}
            renderItem={(post: any) => (
              <li key={post.id} className={styles.comment}>
                <Post post={post} />
              </li>
            )}
          />
        ) : (
          <Title>There is no posts</Title>
        )}
      </div>
    );
  }
  return <Title>There is no posts</Title>;
};

export default Posts;
