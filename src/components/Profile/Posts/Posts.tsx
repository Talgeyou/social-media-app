import { List } from "antd";
import Title from "antd/lib/typography/Title";
import Post from "./Post/Post";
import styles from "./Posts.module.scss";

export interface Post {
  id: number;
  author: {
    id: number;
    name: string;
    imgUrl?: string;
  };
  body: string;
  creationDate: string;
}

export interface PostsProps {
  posts?: Array<Post>;
}

const Posts = (props: PostsProps) => {
  if (props.posts && props.posts.length > 0) {
    return (
      <List
        itemLayout="horizontal"
        dataSource={props.posts.reverse()}
        renderItem={(post) => (
          <li key={post.id} className={styles.comment}>
            <Post post={post} />
          </li>
        )}
      />
    );
  }
  return <Title>There is no posts</Title>;
};

export default Posts;
