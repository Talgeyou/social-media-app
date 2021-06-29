import styles from "./App.module.scss";
import Layout from "antd/lib/layout";
import { Route, Switch } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/common/Header/HeaderContainer";
import NavigationContainer from "./components/common/Navigation/NavigationContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import React from "react";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/common/Preloader";

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
      <Layout className={styles.appWrapper}>
        <HeaderContainer />
        <Layout>
          <NavigationContainer />
          <Layout.Content>
            <Switch>
              <Route exact path="/profile/:id" component={ProfileContainer} />
              <Route path="/dialogs/" component={DialogsContainer} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/login" component={Login} />
            </Switch>
          </Layout.Content>
        </Layout>
      </Layout>
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
