import { Button, Input } from "antd";
import React from "react";
import styles from "./Dialog.module.scss";
import Messages from "./Messages/Messages";

export interface DialogProps {
  dialog: {
    id: number;
    user: {
      id: number;
      name: string;
      imgUrl?: string;
    };
    newMessageText: string;
    messages?: Array<{
      id: number;
      author: {
        id: number;
        name: string;
        imgUrl?: string;
      };
      body: string;
    }>;
  };
  updateNewMessageText: (dialogId: number, messageText: string) => void;
  sendMessage: (
    dialogId: number,
    author: { id: number; name: string; imgUrl?: string }
  ) => void;
}

const Dialog = (props: DialogProps) => {
  const handleNewMessageTextChange = (e: { target: { value: string } }) => {
    props.updateNewMessageText(props.dialog.id, e.target.value);
  };

  const handleSendButtonClick = () => {
    let author = { id: 0, name: "Talge", imgUrl: "https://s.ppy.sh/a/9200248" };
    props.sendMessage(props.dialog.id, author);
  };

  return (
    <div className={styles.dialogWrapper}>
      {props.dialog.messages && props.dialog.messages.length > 0 ? (
        <Messages messages={props.dialog.messages} />
      ) : (
        ""
      )}
      <div className={styles.dialogSendMessage}>
        <Input.TextArea
          rows={4}
          onChange={handleNewMessageTextChange}
          onPressEnter={handleSendButtonClick}
          value={props.dialog.newMessageText}
        />
        <Button type="primary" onClick={handleSendButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
