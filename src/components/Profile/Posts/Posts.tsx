import { Avatar, Comment, List, Tooltip } from "antd";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import { Link } from "react-router-dom";
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
  if (props.posts && props.posts.length > 0)
    return (
      <List
        itemLayout="horizontal"
        dataSource={props.posts}
        renderItem={(post) => (
          <li className={styles.comment}>
            <Comment
              author={
                <Link to={`/profile/${post.author.id}`}>
                  {post.author.name}
                </Link>
              }
              avatar={<Avatar src={post.author.imgUrl} alt="Han Solo" />}
              content={<p>{post.body}</p>}
              datetime={
                <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </li>
        )}
      />
    );
  return <Title>There is no posts</Title>;
};

export default Posts;
