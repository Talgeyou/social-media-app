import moment from "moment";
import { rerenderEntireTree } from "../render";

export interface Message {
  id: number;
  author: User;
  body: string;
}

export interface Dialog {
  id: number;
  user: User;
  newMessageText: string;
  messages: Array<Message>;
}

export interface Post {
  id: number;
  author: User;
  body: string;
  creationDate: string;
}

export interface User {
  id: number;
  name: string;
  description?: string;
  imgUrl?: string;
}

export interface Profile {
  user: User;
  newPostText: string;
  posts: Array<Post>;
}

export interface State {
  profiles: Array<Profile>;
  dialogs: Array<Dialog>;
}

let state: State = {
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
};

export let updateNewPostText = (userId: number, postText: string) => {
  const profile = state.profiles.find(
    (profile: Profile) => profile.user.id === userId
  );
  if (profile) {
    profile.newPostText = postText;
    rerenderEntireTree(state);
  }
};

export let addPost = (user: User) => {
  let profile = state.profiles.find(
    (profile: Profile) => profile.user.id === user.id
  );
  if (profile && profile.newPostText.length > 0) {
    let newPost: Post = {
      id: profile.posts.length,
      author: {
        id: user.id,
        name: user.name,
        imgUrl: user.imgUrl,
      },
      body: profile.newPostText,
      creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    profile.posts.push(newPost);
    profile.newPostText = "";
    rerenderEntireTree(state);
  }
};

export let updateNewMessageText = (dialogId: number, messageText: string) => {
  const dialog = state.dialogs.find((dialog: Dialog) => dialog.id === dialogId);
  if (dialog) {
    dialog.newMessageText = messageText;
    rerenderEntireTree(state);
  }
};

export let sendMessage = (dialogId: number, author: User) => {
  const dialog = state.dialogs.find((dialog: Dialog) => dialog.id === dialogId);
  if (dialog && dialog.newMessageText.length > 0) {
    let newMessage: Message = {
      id: dialog.messages.length,
      author: author,
      body: dialog.newMessageText,
    };
    dialog.messages.push(newMessage);
    dialog.newMessageText = "";
    rerenderEntireTree(state);
  }
};

export default state;
