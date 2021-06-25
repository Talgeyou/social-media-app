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

const dialogsReducer = (state: Array<any> = initialState, action: any) => {
  let dialog: any | undefined;
  switch (action.type) {
    case sendMessageActionType:
      dialog = state.find((d: any) => d.id === action.dialogId);
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
      dialog = state.find((d) => d.id === action.dialogId);
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
