import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import Dialog from "./Dialog";

export interface DialogContainerProps {
  dialog: any;
  dispatch: (action: any) => void;
}

const DialogContainer = (props: DialogContainerProps) => {
  const handleSendMessageButtonClick = () => {
    const author = {
      id: 0,
      name: "Talge",
      imgUrl: "https://s.ppy.sh/a/9200248",
    };
    const action = sendMessageActionCreator(props.dialog.id, author);
    props.dispatch(action);
  };

  const handleNewMessageTextChange = (textMessage: string) => {
    const action = updateNewMessageTextActionCreator(
      props.dialog.id,
      textMessage
    );
    props.dispatch(action);
  };
  return (
    <Dialog
      newMessageText={props.dialog.newMessageText}
      messages={props.dialog.messages}
      onNewMessageTextChange={handleNewMessageTextChange}
      onSendMessageButtonClick={handleSendMessageButtonClick}
    />
  );
};

export default DialogContainer;
