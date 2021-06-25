import styles from "./App.module.scss";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

export interface AppProps {
  state: any;
  dispatch(action: any): void;
}

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Layout className={styles.appWrapper}>
        <Header className="header">
          <div className={styles.logo}>Samurai</div>
        </Header>
        <Layout>
          <Sider theme="light" width={200}>
            <Menu mode="inline" defaultSelectedKeys={["profile"]}>
              <Menu.Item key="profile">
                <Link to="/profile/0">Profile</Link>
              </Menu.Item>
              <Menu.Item key="messages">
                <Link to="/dialogs">Messages</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route
                path="/profile/:id"
                render={() => (
                  <Profile
                    profiles={props.state.profiles}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <Dialogs
                    dialogs={props.state.dialogs}
                    dispatch={props.dispatch}
                  />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
