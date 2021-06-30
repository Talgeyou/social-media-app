import styles from "./Post.module.scss";
import { Avatar, Comment, Tooltip } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";

export interface PostProps {
  post: {
    id: number;
    author: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    body: string;
    creationDate: string;
  };
}

const Post: React.SFC<PostProps> = ({ post }: PostProps) => {
  return (
    <Comment
      author={<Link to={`/profile/${post.author.id}`}>{post.author.name}</Link>}
      avatar={
        post.author.imgUrl ? (
          <Avatar
            className={styles.author__avatar}
            src={post.author.imgUrl}
            alt={post.author.name}
          />
        ) : (
          <UserOutlined />
        )
      }
      content={<p>{post.body}</p>}
      datetime={
        <Tooltip
          title={moment(post.creationDate).format("YYYY-MM-DD HH:mm:ss")}
        >
          <span>{moment(post.creationDate).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;
