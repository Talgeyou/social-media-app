import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../../redux/authReducer";

const HeaderContainer = (props: any) => {
  useEffect(() => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((res: any) => {
        if (res.data.resultCode === 0) {
          let { id, email, login } = res.data.data;
          props.setAuthUserData(id, email, login);
        }
      });
  });

  return <Header {...props} />;
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
