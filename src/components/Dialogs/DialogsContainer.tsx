import { connect } from "react-redux";
import Dialogs from "./Dialogs";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const dialogs = store.getState().dialogs;

//         return dialogs ? (
//           <Dialogs dialogs={dialogs} />
//         ) : (
//           <Title>There are no dialogs</Title>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state: any) => {
  return {
    dialogs: state.dialogs,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
