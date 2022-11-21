import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  updateInfo,
} from '../../redux/profileReducer';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  updatePage() {
    let userID = this.props.params.userID;
    if (!userID) {
      userID = this.props.authorizeduserID;
    }
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
  }
  componentDidMount() {
    this.updatePage();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userID !== prevProps.params.userID) {
      this.updatePage();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!!this.props.params.userID}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        updateInfo={this.props.updateInfo}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  authorizeduserID: state.auth.id,
  info: state.profilePage.info,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    updateInfo,
  }),
  withRouter,
  AuthNavigate
)(ProfileContainer);
