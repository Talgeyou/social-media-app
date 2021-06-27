import React from "react";
import { connect } from "react-redux";
import { getUserProfileThunkCreator } from "../../redux/profilesReducer";
import Preloader from "../common/Preloader";
import Profile from "./Profile";

interface ProfileContainerProps {
  profile: any;
  isFetching: boolean;
  getUserProfile: (userId: number) => void;
  match: any;
}

class ProfileContainer extends React.Component<ProfileContainerProps> {
  componentDidMount() {
    this.props.getUserProfile(+this.props.match.params.id);
  }

  render() {
    return !this.props.profile || this.props.isFetching ? (
      <Preloader />
    ) : (
      <Profile profile={this.props.profile} />
    );
  }
}

// const ProfileContainer = (props: ProfileContainerProps) => {
//   let profileId = +props.match.params.id;

//   useEffect(() => {
//     if (!props.isFetching) {
//       props.getUserProfile(profileId);
//     }
//   });

// };

const mapStateToProps = (state: any) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};

export default connect(mapStateToProps, {
  getUserProfile: getUserProfileThunkCreator,
})(ProfileContainer);
