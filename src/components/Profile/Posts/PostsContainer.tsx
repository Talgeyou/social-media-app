import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profilesReducer";
import Posts from "./Posts";

export interface PostsContainerProps {
  profile: any;
  dispatch: any;
}

const PostsContainer = (props: PostsContainerProps) => {
  const handlePostChange = (postText: string) => {
    const action = updateNewPostTextActionCreator(props.profile.id, postText);
    props.dispatch(action);
  };

  const handlePostAdd = (author: any) => {
    const action = addPostActionCreator(props.profile.id, author);
    props.dispatch(action);
  };

  return (
    <Posts
      newPostText={props.profile.newPostText}
      posts={props.profile.posts}
      onNewPostTextChange={handlePostChange}
      onAddPost={handlePostAdd}
    />
  );
};

export default PostsContainer;
