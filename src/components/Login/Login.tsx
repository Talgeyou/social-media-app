import styles from "./Login.module.scss";
import { Typography } from "antd";
import LoginForm from "./LoginForm/LoginForm";

import { Redirect } from "react-router-dom";
import { getAuthUserId } from "../../redux/auth-selectors";
import { connect } from "react-redux";

interface Props {
  isAuth: boolean;
  authUserId: number | null;
}

const Login = ({ isAuth, authUserId }: Props) => {
  if (isAuth) {
    return <Redirect to={`/profile/${authUserId}`} />;
  }

  return (
    <div className={styles.loginPage}>
      <Typography.Title>Login</Typography.Title>
      <LoginForm />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    authUserId: getAuthUserId(state),
  };
};

export default connect(mapStateToProps)(Login);
