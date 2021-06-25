import { Avatar, List } from "antd";
import { Link } from "react-router-dom";
import styles from "./Message.module.scss";

export interface MessageProps {
  message: {
    id: number;
    author: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    body: string;
  };
}

const Message = (props: MessageProps) => {
  return (
    <List.Item className={styles.messageWrapper}>
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