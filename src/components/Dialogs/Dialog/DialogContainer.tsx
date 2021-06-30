import { connect } from "react-redux";
import { sendMessageActionCreator } from "../../../redux/dialogsReducer";
import Dialog from "./Dialog";

const mapStateToProps = (state: any, ownProps: any) => {
  const id: number = +ownProps.match.params.id;
  const dialog = state.dialogsPage.dialogs.find((d: any) => d.id === id);
  debugger;
  return {
    dialogId: id,
    messages: dialog ? dialog.messages : [],
  };
};

const DialogContainer = connect(mapStateToProps, {
  sendMessage: sendMessageActionCreator,
})(Dialog);

export default DialogContainer;
