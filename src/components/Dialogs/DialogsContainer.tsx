import { connect } from "react-redux";

import { Component } from "react";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

class DialogsContainer extends Component<any> {
  render() {
    return <Dialogs isAuth={this.props.isAuth} dialogs={this.props.dialogs} />;
  }
}

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  withAuthRedirect
)(DialogsContainer);
