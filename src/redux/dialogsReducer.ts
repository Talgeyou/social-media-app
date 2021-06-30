export const SEND_MESSAGE = "samurai/dialogs/SEND-MESSAGE";

interface User {
  id: number;
  name: string;
  imgUrl?: string | null;
}

interface Message {
  id: number;
  author: User;
  body: string;
}

interface Dialog {
  id: number;
  user: User;
  messages: Array<Message>;
}

interface DialogsState {
  dialogs: Array<Dialog>;
}

const initialState: DialogsState = {
  dialogs: [
    {
      id: 0,
      user: {
        id: 1,
        name: "RAGEEXE",
      },
      messages: [
        { id: 0, author: { id: 0, name: "Talge" }, body: "Hello, :3" },
      ],
    },
  ],
};

const dialogsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        dialogs: state.dialogs.map((d: Dialog) => {
          if (d.id === action.dialogId) {
            return {
              ...d,
              messages: [
                ...d.messages,
                {
                  id: d.messages.length,
                  author: { id: 0, name: "Talge" },
                  body: action.messageText,
                },
              ],
            };
          }
          return d;
        }),
      };
  }
  return state;
};

export default dialogsReducer;

export const sendMessageActionCreator = (
  messageText: string,
  dialogId: number
) => ({
  type: SEND_MESSAGE,
  messageText,
  dialogId,
});
