import { connect } from "react-redux";
import Navigation from "./Navigation";

const NavigationContainer = (props: any) => {
  const path = window.location.href.split("/")[3];

  return <Navigation userId={props.userId} path={path} />;
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(NavigationContainer);
