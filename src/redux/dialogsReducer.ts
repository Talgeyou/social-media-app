export const sendMessageActionType = "SEND-MESSAGE";
export const updateNewMessageTextActionType = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogs: [],
};

const dialogsReducer = (state: any = initialState, action: any) => {
  let dialog: any | undefined;
  switch (action.type) {
    case sendMessageActionType:
      dialog = state.dialogs.find((d: any) => d.id === action.dialogId);
      if (dialog && dialog.newMessageText.length > 0) {
        let newMessage: any = {
          id: dialog.messages.length,
          author: action.author,
          body: dialog.newMessageText,
        };
        dialog.newMessageText = "";
        dialog.messages.push(newMessage);
      }
      break;
    case updateNewMessageTextActionType:
      dialog = state.dialogs.find((d: any) => d.id === action.dialogId);
      if (dialog) {
        dialog.newMessageText = action.messageText;
      }
      break;
  }
  return state;
};

export default dialogsReducer;

export const sendMessageActionCreator = (
  dialogId: number,
  author: { id: number; name: string; imgUrl?: string }
) => ({ type: sendMessageActionType, dialogId: dialogId, author: author });

export const updateNewMessageTextActionCreator = (
  dialogId: number,
  messageText: string
) => ({
  type: updateNewMessageTextActionType,
  dialogId: dialogId,
  messageText: messageText,
});
