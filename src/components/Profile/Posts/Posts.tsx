import { Button, List } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Title from "antd/lib/typography/Title";
import Post from "./Post/Post";
import styles from "./Posts.module.scss";

export interface PostsProps {
  posts: Array<any>;
  newPostText: string;
  onNewPostTextChange: (postText: string) => void;
  onAddPost: (author: { id: number; name: string; imgUrl?: string }) => void;
}

const Posts = (props: PostsProps) => {
  const posts = props.posts.reverse();

  const handleNewPostTextChange = (e: { target: { value: any } }) => {
    let postText = e.target.value;
    props.onNewPostTextChange(postText);
  };

  const addPost = () => {
    let author = {
      id: 0,
      name: "Talge",
      imgUrl: "https://s.ppy.sh/a/9200248",
    };
    props.onAddPost(author);
  };

  if (props.posts && props.posts.length > 0) {
    return (
      <div>
        <div className={styles.profileAddPost}>
          <TextArea
            rows={3}
            value={props.newPostText}
            placeholder={"Enter post's text"}
            onChange={handleNewPostTextChange}
          />
          <Button type="primary" onClick={addPost}>
            Add Post
          </Button>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={posts}
          renderItem={(post: any) => (
            <li key={post.id} className={styles.comment}>
              <Post post={post} />
            </li>
          )}
        />
      </div>
    );
  }
  return <Title>There is no posts</Title>;
};

export default Posts;
