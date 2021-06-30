import React, { useEffect } from "react";
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

interface Props {
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

export const ProfileContainer = (props: Props) => {
  useEffect(() => {
    let userId = props.match.params.id;
    if (!userId || userId < 2) {
      userId = 2;
    }
    props.getUserProfile(userId);
    props.getUserStatus(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  return <Profile {...props} />;
};

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
)(React.memo(ProfileContainer));
