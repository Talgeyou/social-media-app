import React from "react";
import { connect } from "react-redux";
import { getUserProfileThunkCreator } from "../../redux/profilesReducer";
import Profile from "./Profile";

interface ProfileContainerProps {
  profile: any;
  isFetching: boolean;
  isAuth: boolean;
  getUserProfile: (userId: number) => void;
  match: any;
}

class ProfileContainer extends React.Component<ProfileContainerProps> {
  componentDidMount() {
    this.props.getUserProfile(
      this.props.match.params.id ? +this.props.match.params.id : 3
    );
  }

  render() {
    return <Profile {...this.props} />;
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
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  getUserProfile: getUserProfileThunkCreator,
})(ProfileContainer);
