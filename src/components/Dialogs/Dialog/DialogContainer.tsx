import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogsReducer";
import Dialog from "./Dialog";

// const DialogContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const dialog = id
//           ? store.getState().dialogs.find((dialog) => dialog.id === +id)
//           : undefined;
//         if (dialog) {
//           const handleSendMessageButtonClick = () => {
//             const action = sendMessageActionCreator(dialog.id, author);
//             store.dispatch(action);
//           };
//           const handleNewMessageTextChange = (textMessage: string) => {
//             const action = updateNewMessageTextActionCreator(
//               dialog.id,
//               textMessage
//             );
//             store.dispatch(action);
//           };
//           return (
//             <Dialog
//               newMessageText={dialog.newMessageText}
//               messages={dialog.messages}
//               onNewMessageTextChange={handleNewMessageTextChange}
//               onSendMessageButtonClick={handleSendMessageButtonClick}
//             />
//           );
//         }
//         return <Title>There's no such dialog</Title>;
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state: any, ownProps: any) => {
  const id: number = +ownProps.match.params.id;
  const dialog = state.dialogs.find((d: any) => d.id === id);
  debugger;
  return {
    newMessageText: dialog ? dialog.newMessageText : "",
    messages: dialog ? dialog.messages : [],
  };
};

const mapDispatchToProps = (dispatch: (action: any) => void, ownProps: any) => {
  const id: number = +ownProps.match.params.id;
  const author = {
    id: 0,
    name: "Talge",
    imgUrl: "https://s.ppy.sh/a/9200248",
  };
  return {
    onSendMessageButtonClick: () => {
      dispatch(sendMessageActionCreator(id, author));
    },
    onNewMessageTextChange: (textMessage: string) => {
      dispatch(updateNewMessageTextActionCreator(id, textMessage));
    },
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
