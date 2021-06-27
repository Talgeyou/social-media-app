import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMeThunkCreator } from "../../../redux/authReducer";

class HeaderContainer extends React.Component<any> {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { authMe: authMeThunkCreator })(
  HeaderContainer
);
