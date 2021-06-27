import { connect } from "react-redux";

import React, { Component } from "react";
import Dialogs from "./Dialogs";

class DialogsContainer extends Component<any> {
  render() {
    return <Dialogs isAuth={this.props.isAuth} dialogs={this.props.dialogs} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogs,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(DialogsContainer);
