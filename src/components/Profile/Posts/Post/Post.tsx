import { Avatar, Comment, Tooltip } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

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

const Post: React.SFC<PostProps> = (props: PostProps) => {
  return (
    <Comment
      author={
        <Link to={`/profile/${props.post.author.id}`}>
          {props.post.author.name}
        </Link>
      }
      avatar={
        <Avatar src={props.post.author.imgUrl} alt={props.post.author.name} />
      }
      content={<p>{props.post.body}</p>}
      datetime={
        <Tooltip
          title={moment(props.post.creationDate).format("YYYY-MM-DD HH:mm:ss")}
        >
          <span>{moment(props.post.creationDate).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;
