import moment from "moment";

interface User {
  id: number;
  name: string;
  description?: string;
  imgUrl?: string;
}

interface Post {
  id: number;
  author: User;
  body: string;
  creationDate: string;
}

interface Message {
  id: number;
  author: User;
  body: string;
}

interface Dialog {
  id: number;
  user: User;
  newMessageText: string;
  messages: Array<Message>;
}

interface Profile {
  user: User;
  newPostText: string;
  posts: Array<Post>;
}

export interface State {
  profiles: Array<Profile>;
  dialogs: Array<Dialog>;
}

export interface Store {
  readonly _state: State;
  _callSubscriber(store: Store): void;

  getState(): State;
  subscribe(observer: (store: Store) => void): void;
  updateNewPostText(profileId: number, postText: string): void;
  addPost(profileId: number, author: User): void;
  updateNewMessageText(dialogId: number, messageText: string): void;
  sendMessage(dialogId: number, author: User): void;
}

export let store: Store = {
  _state: {
    profiles: [
      {
        user: {
          id: 0,
          name: "Talge",
          description: "Hi, I'm React Frontend Developer",
          imgUrl: "https://s.ppy.sh/a/9200248",
        },
        newPostText: "",
        posts: [
          {
            id: 0,
            author: {
              id: 0,
              name: "Talge",
              imgUrl: "https://s.ppy.sh/a/9200248",
            },
            body: "This is my first post :3",
            creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            id: 1,
            author: {
              id: 0,
              name: "Talge",
              imgUrl: "https://s.ppy.sh/a/9200248",
            },
            body: "Hey, there :)",
            creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        ],
      },
      {
        user: {
          id: 1,
          name: "RAGEEXE",
          description: "BANDA CREEPS",
          imgUrl: "https://s.ppy.sh/a/7417358",
        },
        newPostText: "",
        posts: [
          {
            id: 0,
            author: {
              id: 1,
              name: "RAGEEXE",
              imgUrl: "https://s.ppy.sh/a/7417358",
            },
            body: "This is my first post :3",
            creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
          {
            id: 1,
            author: {
              id: 1,
              name: "RAGEEXE",
              imgUrl: "https://s.ppy.sh/a/7417358",
            },
            body: "Hey, there :)",
            creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
          },
        ],
      },
    ],
    dialogs: [
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
    ],
  },
  _callSubscriber(store) {
    console.log("State has been changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  updateNewPostText(profileId: number, postText: string) {
    const profile = this._state.profiles.find(
      (profile: Profile) => profile.user.id === profileId
    );
    if (profile) {
      profile.newPostText = postText;
      this._callSubscriber(this);
    }
  },

  addPost(profileId: number, author: User) {
    let profile = this._state.profiles.find(
      (profile: Profile) => profile.user.id === profileId
    );
    if (profile && profile.newPostText.length > 0) {
      let newPost: Post = {
        id: profile.posts.length,
        author: author,
        body: profile.newPostText,
        creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      profile.posts.push(newPost);
      profile.newPostText = "";
      this._callSubscriber(this);
    }
  },

  updateNewMessageText(dialogId: number, messageText: string) {
    const dialog = this._state.dialogs.find((dialog) => dialog.id === dialogId);
    if (dialog) {
      dialog.newMessageText = messageText;
      this._callSubscriber(this);
    }
  },

  sendMessage(dialogId: number, author: User) {
    const dialog = this._state.dialogs.find(
      (dialog: Dialog) => dialog.id === dialogId
    );
    if (dialog && dialog.newMessageText.length > 0) {
      let newMessage: Message = {
        id: dialog.messages.length,
        author: author,
        body: dialog.newMessageText,
      };
      dialog.messages.push(newMessage);
      dialog.newMessageText = "";
      this._callSubscriber(this);
    }
  },

  // dispatch(action) {
  //   if (action.type === "ADD-POST") {
  //     let profile = this._state.profiles.find(
  //       (profile: Profile) => profile.user.id === action.profileId
  //     );
  //     if (profile && profile.newPostText.length > 0) {
  //       let newPost: Post = {
  //         id: profile.posts.length,
  //         author: action.author,
  //         body: profile.newPostText,
  //         creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
  //       };
  //       profile.posts.push(newPost);
  //       profile.newPostText = "";
  //       this._callSubscriber(this);
  //     }
  //   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
  //     const profile = this._state.profiles.find(
  //       (profile: Profile) => profile.user.id === profileId
  //     );
  //     if (profile) {
  //       profile.newPostText = action.postText;
  //       this._callSubscriber(this);
  //     }
  //   } else if (action.type === "SEND-MESSAGE") {
  //     const dialog = this._state.dialogs.find(
  //       (dialog: Dialog) => dialog.id === action.dialogId
  //     );
  //     if (dialog && dialog.newMessageText.length > 0) {
  //       let newMessage: Message = {
  //         id: dialog.messages.length,
  //         author: action.author,
  //         body: dialog.newMessageText,
  //       };
  //       dialog.messages.push(newMessage);
  //       dialog.newMessageText = "";
  //       this._callSubscriber(this);
  //     }
  //   } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
  //     const dialog = this._state.dialogs.find(
  //       (dialog) => dialog.id === action.dialogId
  //     );
  //     if (dialog) {
  //       dialog.newMessageText = action.messageText;
  //       this._callSubscriber(this);
  //     }
  //   }
  // },
};
