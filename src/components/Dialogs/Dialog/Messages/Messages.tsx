import { List } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import Message from "./Message/Message";
import styles from "./Messages.module.scss";

export interface MessagesProps {
  messages: Array<{
    id: number;
    author: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    body: string;
  }>;
}

const Messages = (props: MessagesProps) => {
  if (props.messages.length > 0)
    return (
      <List
        className={styles.messagesWrapper}
        itemLayout="horizontal"
        dataSource={props.messages}
        renderItem={(message) => {
          return <Message message={message} />;
        }}
      />
    );

  return <Title className={styles.title}>There is no messages</Title>;
};

export default Messages;
