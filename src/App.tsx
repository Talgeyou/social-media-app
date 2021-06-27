import styles from "./App.module.scss";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

export interface AppProps {}

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
              <Menu.Item key="users">
                <Link to="/users">Find Users</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Switch>
              <Route path="/profile/:id" component={ProfileContainer} />
              <Route path="/dialogs/" component={DialogsContainer} />
              <Route path="/users" component={UsersContainer} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
