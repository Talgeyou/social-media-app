import styles from "./Header.module.scss";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";

const Header = (props: any) => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>Samurai</div>
      <div className={styles.login}>
        {props.isAuth ? (
          <div>{props.login}</div>
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
