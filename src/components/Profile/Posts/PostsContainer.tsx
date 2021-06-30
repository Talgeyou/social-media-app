import { connect } from "react-redux";
import { getAuthUserId } from "../../../redux/auth-selectors";
import { getProfileUserId } from "../../../redux/profiles-selectors";
import { addPost } from "../../../redux/profilesReducer";
import Posts from "./Posts";

export interface PostsContainerProps {
  authUserId: number;
  profileUserId: number;
  posts: Array<any>;
  addPost: (postText: any) => void;
}

const PostsContainer = (props: PostsContainerProps) => {
  return <Posts {...props} />;
};

const mapStateToProps = (state: any) => {
  return {
    authUserId: getAuthUserId(state),
    profileUserId: getProfileUserId(state),
    posts: state.profilePage.posts,
  };
};

export default connect(mapStateToProps, { addPost })(PostsContainer);
