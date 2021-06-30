import { connect } from "react-redux";

import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

interface Props {
  dialogs: Array<any>;
  isAuth: boolean;
}

const DialogsContainer = (props: Props) => {
  return <Dialogs {...props} />;
};

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  withAuthRedirect
)(DialogsContainer);
