import { Button, Input } from "antd";
import { useState } from "react";
import styles from "./Dialog.module.scss";
import MessagesContainer from "./Messages/MessagesContainer";

export interface DialogProps {
  dialogId: number;
  messages: Array<any>;
  sendMessage: (messageText: string, dialogId: number) => void;
}

const Dialog = ({ dialogId, messages, sendMessage }: DialogProps) => {
  const [newMessageText, setNewMessageText] = useState("");

  const handleNewMessageTextChange = (e: { target: { value: any } }) => {
    setNewMessageText(e.target.value);
  };

  const handleSendMessageButtonClick = () => {
    setNewMessageText("");
    sendMessage(newMessageText, dialogId);
  };

  return (
    <div className={styles.dialogWrapper}>
      <MessagesContainer messages={messages} />
      <div className={styles.dialogSendMessage}>
        <Input.TextArea
          rows={4}
          onChange={handleNewMessageTextChange}
          value={newMessageText}
        />
        <Button type="primary" onClick={handleSendMessageButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
