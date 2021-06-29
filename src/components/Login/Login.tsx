import styles from "./Login.module.scss";
import { Typography } from "antd";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <Typography.Title>Login</Typography.Title>
      <LoginForm />
    </div>
  );
};

export default Login;
