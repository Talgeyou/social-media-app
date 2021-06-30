import styles from "./Header.module.scss";
import { Button, Layout } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
  isAuth: boolean;
  login?: string;
  logOut: () => void;
}

const Header = (props: Props) => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>Samurai</div>
      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>{" "}
            <Button onClick={props.logOut}>Log Out</Button>
          </div>
        ) : (
          <NavLink to={"/login"} className={styles.login__link}>
            Login
          </NavLink>
        )}
      </div>
    </Layout.Header>
  );
};

export default Header;
