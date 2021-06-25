import { Button, Input } from "antd";
import styles from "./Dialog.module.scss";
import Messages from "./Messages/Messages";

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

  const handleSendMessageButtonClick = () => {
    props.onSendMessageButtonClick();
  };

  return (
    <div className={styles.dialogWrapper}>
      {props.messages && props.messages.length > 0 ? (
        <Messages messages={props.messages} />
      ) : (
        ""
      )}
      <div className={styles.dialogSendMessage}>
        <Input.TextArea
          rows={4}
          onChange={handleNewMessageTextChange}
          value={props.newMessageText}
        />
        <Button type="primary" onClick={handleSendMessageButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
