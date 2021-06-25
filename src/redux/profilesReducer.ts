import moment from "moment";
import { Post, Profile } from "./store";

export const addPostActionType = "ADD-POST";
export const updateNewPostTextActionType = "UPDATE-NEW-POST-TEXT";

const initialState = [
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
];

const profilesReducer = (state: Array<Profile> = initialState, action: any) => {
  let profile: Profile | undefined;
  switch (action.type) {
    case addPostActionType:
      profile = state.find(
        (profile: Profile) => profile.user.id === action.profileId
      );
      if (profile && profile.newPostText.length > 0) {
        let newPost: Post = {
          id: profile.posts.length,
          author: action.author,
          body: profile.newPostText,
          creationDate: moment().format("YYYY-MM-DD HH:mm:ss"),
        };
        profile.posts.push(newPost);
        profile.newPostText = "";
      }
      return state;
    case updateNewPostTextActionType:
      profile = state.find(
        (profile: Profile) => profile.user.id === action.profileId
      );
      if (profile) {
        profile.newPostText = action.postText;
      }
      return state;
    default:
      return state;
  }
};

export default profilesReducer;

export const addPostActionCreator = (
  profileId: number,
  author: {
    id: number;
    name: string;
    imgUrl?: string;
  }
) => ({
  type: addPostActionType,
  profileId: profileId,
  author: author,
});

export const updateNewPostTextActionCreator = (
  profileId: number,
  postText: string
) => ({
  type: updateNewPostTextActionType,
  profileId: profileId,
  postText: postText,
});
