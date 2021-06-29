import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUserProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
} from "../../redux/profilesReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

interface ProfileContainerProps {
  authUserId: number | null;
  profile: any;
  status: string;
  isFetching: boolean;
  isAuth: boolean;
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  match: any;
}

class ProfileContainer extends React.Component<
  ProfileContainerProps,
  { userId: number }
> {
  constructor(props: ProfileContainerProps) {
    super(props);

    this.state = {
      userId: +this.props.match.params.id,
    };
  }

  componentDidMount() {
    let userId = this.state.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidUpdate(
    prevProps: ProfileContainerProps,
    prevState: { userId: number }
  ) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ userId: this.props.match.params.id });
      this.props.getUserProfile(this.props.match.params.id);
      this.props.getUserStatus(this.props.match.params.id);
    }
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    authUserId: state.auth.userId,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
  };
};

export default compose<any>(
  connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator,
  }),

  withRouter,
  withAuthRedirect
)(ProfileContainer);
