import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setUserProfile, setIsFetching } from "../../redux/profilesReducer";
import Preloader from "../common/Preloader";
import Profile from "./Profile";

interface ProfileContainerProps {
  profile: any;
  isFetching: boolean;
  setUserProfile: (profile: any) => void;
  setIsFetching: (stats: boolean) => void;
  match: any;
}

const ProfileContainer = (props: ProfileContainerProps) => {
  let id = +props.match.params.id;
  if (!id) {
    id = 2;
  }
  useEffect(() => {
    if (!props.isFetching) {
      const shouldFetch: boolean = props.profile
        ? props.profile.userId !== id
        : true;
      if (shouldFetch) {
        props.setIsFetching(true);
        axios
          .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
          .then((res: any) => {
            props.setUserProfile(res.data);
            props.setIsFetching(false);
          });
      }
    }
  });

  if (!props.profile || props.isFetching) {
    return <Preloader />;
  }

  return (
    <Profile
      profile={props.profile}
      isFetching={props.isFetching}
      setUserProfile={props.setUserProfile}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};

export default connect(mapStateToProps, { setUserProfile, setIsFetching })(
  ProfileContainer
);
