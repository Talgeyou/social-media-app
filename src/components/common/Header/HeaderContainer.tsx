import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOutThunkCreator } from "../../../redux/authReducer";

interface Props {
  isAuth: boolean;
  login?: string;
  logOut: () => void;
}

export const HeaderContainer = (props: Props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  logOut: logOutThunkCreator,
})(HeaderContainer);
