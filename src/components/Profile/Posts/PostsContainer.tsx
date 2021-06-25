import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profilesReducer";
import Posts from "./Posts";

export interface PostsContainerProps {
  profileId: number;
  newPostText: string;
  posts: Array<any>;
  dispatch: (action: any) => void;
}

const PostsContainer = (props: PostsContainerProps) => {
  const handlePostChange = (postText: string) => {
    const action = updateNewPostTextActionCreator(props.profileId, postText);
    props.dispatch(action);
  };

  const handlePostAdd = (author: any) => {
    const action = addPostActionCreator(props.profileId, author);
    props.dispatch(action);
  };

  return (
    <Posts
      newPostText={props.newPostText}
      posts={props.posts}
      onNewPostTextChange={handlePostChange}
      onAddPost={handlePostAdd}
    />
  );
};

export default PostsContainer;
