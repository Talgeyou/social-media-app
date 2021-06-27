import { Button, Input } from "antd";
import styles from "./Dialog.module.scss";
import MessagesContainer from "./Messages/MessagesContainer";

export interface DialogProps {
  messages: Array<any>;
  newMessageText: string;
  onNewMessageTextChange: (textMessage: string) => void;
  onSendMessageButtonClick: () => void;
}

const Dialog = (props: DialogProps) => {
  const handleNewMessageTextChange = (e: any) => {
    props.onNewMessageTextChange(e.target.value);
  };

  return (
    <div className={styles.dialogWrapper}>
      <MessagesContainer messages={props.messages} />
      <div className={styles.dialogSendMessage}>
        <Input.TextArea
          rows={4}
          onChange={handleNewMessageTextChange}
          value={props.newMessageText}
        />
        <Button type="primary" onClick={props.onSendMessageButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
