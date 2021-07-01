import styles from "./App.module.scss";
import Layout from "antd/lib/layout";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./components/common/Header/HeaderContainer";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import React from "react";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/common/Preloader";
import { withSuspense } from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);

const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);

const UsersContainer = React.lazy(
  () => import("./components/Users/UsersContainer")
);

const Login = React.lazy(() => import("./components/Login/Login"));

export interface AppProps {
  initialized: boolean;
  initializeApp: () => void;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader classNames={styles.preloader} />;
    }
    return (
      <React.Suspense fallback={<Preloader />}>
        <Layout className={styles.appWrapper}>
          <HeaderContainer />
          <Layout>
            <NavigationContainer />
            <Layout.Content>
              <Switch>
                <Route exact path="/profile/:id" component={ProfileContainer} />
                <Route path="/dialogs/" component={DialogsContainer} />
                <Route path="/users" component={UsersContainer} />
                <Route path="/login" component={withSuspense(Login)} />
              </Switch>
            </Layout.Content>
          </Layout>
        </Layout>
      </React.Suspense>
    );
  }
}

const mapStateToProps = (state: any) => ({
  initialized: state.app.initialized,
});

export default compose<any>(
  withRouter,
  connect(mapStateToProps, { initializeApp: initializeAppThunkCreator })
)(App);
