import { addTextActionCreator } from '../../redux/messagesReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import { compose } from 'redux';
let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addNewDialogText: (newMessageText) => {
      dispatch(addTextActionCreator(newMessageText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthNavigate
)(Dialogs);
