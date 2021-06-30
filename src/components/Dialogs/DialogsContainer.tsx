import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

interface Props {
  dialogs: Array<any>;
  isAuth: boolean;
}

const DialogsContainer = (props: Props) => {
  return <Dialogs isAuth={props.isAuth} dialogs={props.dialogs} />;
};

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  withAuthRedirect
)(DialogsContainer);
