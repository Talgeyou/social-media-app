import styles from "./App.module.scss";
import Layout from "antd/lib/layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/common/Header/HeaderContainer";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import Login from "./components/Login/Login";

export interface AppProps {}

function App(_props: AppProps) {
  return (
    <BrowserRouter>
      <Layout className={styles.appWrapper}>
        <HeaderContainer />
        <Layout>
          <NavigationContainer />
          <Layout.Content>
            <Switch>
              <Route path="/profile/:id" component={ProfileContainer} />
              <Route path="/dialogs/" component={DialogsContainer} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/login" component={Login} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
