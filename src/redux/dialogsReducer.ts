import { Dialog, Message } from "./store";

export const sendMessageActionType = "SEND-MESSAGE";
export const updateNewMessageTextActionType = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = [
  {
    id: 0,
    user: {
      id: 1,
      name: "RAGEEXE",
      imgUrl: "https://s.ppy.sh/a/7417358",
    },
    newMessageText: "",
    messages: [
      {
        id: 0,
        author: {
          id: 0,
          name: "Talge",
          imgUrl: "https://s.ppy.sh/a/9200248",
        },
        body: "Wassup",
      },
      {
        id: 1,
        author: {
          id: 1,
          name: "RAGEEXE",
          imgUrl: "https://s.ppy.sh/a/7417358",
        },
        body: "Hi",
      },
    ],
  },
  {
    id: 1,
    user: {
      id: 2,
      name: "Clopervok",
    },
    newMessageText: "",
    messages: [
      {
        id: 0,
        author: {
          id: 0,
          name: "Talge",
          imgUrl: "https://s.ppy.sh/a/9200248",
        },
        body: "Hello :)",
      },
      {
        id: 1,
        author: {
          id: 2,
          name: "Clopervok",
        },
        body: "Hi :3",
      },
    ],
  },
];

const dialogsReducer = (state: Array<Dialog> = initialState, action: any) => {
  let dialog: Dialog | undefined;
  switch (action.type) {
    case sendMessageActionType:
      dialog = state.find((dialog: Dialog) => dialog.id === action.dialogId);
      if (dialog && dialog.newMessageText.length > 0) {
        let newMessage: Message = {
          id: dialog.messages.length,
          author: action.author,
          body: dialog.newMessageText,
        };
        dialog.messages.push(newMessage);
        dialog.newMessageText = "";
      }
      return state;
    case updateNewMessageTextActionType:
      dialog = state.find((dialog) => dialog.id === action.dialogId);
      if (dialog) {
        dialog.newMessageText = action.messageText;
      }
      return state;
    default:
      return state;
  }
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
