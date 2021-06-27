import Title from "antd/lib/typography/Title";
import Messages from "./Messages";
import styles from "./Messages.module.scss";

export interface MessagesContainerProps {
  messages: Array<any>;
}

const MessagesContainer = (props: MessagesContainerProps) => {
  return props.messages ? (
    <Messages messages={props.messages} />
  ) : (
    <Title className={styles.title}>There are no messages</Title>
  );
};

export default MessagesContainer;
