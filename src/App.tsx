import styles from "./App.module.scss";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { Menu } from "antd";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { Post } from "./components/Profile/Posts/Posts";
import Dialogs from "./components/Dialogs/Dialogs";

export interface AppProps {
  state: {
    profiles: Array<{
      user: {
        id: number;
        name: string;
        description?: string;
        imgUrl?: string;
      };
      newPostText: string;
      posts?: Array<Post>;
    }>;
    dialogs?: Array<{
      id: number;
      user: { id: number; name: string; imgUrl?: string };
      newMessageText: string;
      messages: Array<{
        id: number;
        author: { id: number; name: string; imgUrl?: string };
        body: string;
      }>;
    }>;
  };
  onNewPostTextChange: (profileId: number, postText: string) => void;
  addPost: (
    profileId: number,
    author: { id: number; name: string; imgUrl?: string }
  ) => void;
  updateNewMessageText: (dialogId: number, messageText: string) => void;
  sendMessage: (
    dialogId: number,
    author: { id: number; name: string; imgUrl?: string }
  ) => void;
}

function App(props: AppProps) {
  return (
    <Layout className={styles.appWrapper}>
      <BrowserRouter>
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
                    onNewPostTextChange={props.onNewPostTextChange}
                    addPost={props.addPost}
                  />
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <Dialogs
                    dialogs={props.state.dialogs}
                    updateNewMessageText={props.updateNewMessageText}
                    sendMessage={props.sendMessage}
                  />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
