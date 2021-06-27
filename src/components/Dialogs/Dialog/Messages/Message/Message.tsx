import { Avatar, List } from "antd";
import { Link } from "react-router-dom";

export interface MessageProps {
  message: any;
}

const Message = (props: MessageProps) => {
  return (
    <List.Item>
      <List.Item.Meta
        title={
          <Link to={`/profile/${props.message.author.id}`}>
            {props.message.author.name}
          </Link>
        }
        description={props.message.body}
        avatar={
          <Avatar
            src={props.message.author.imgUrl}
            alt={props.message.author.name}
          />
        }
      />
    </List.Item>
  );
};

export default Message;
