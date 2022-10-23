import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profileReducer';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import { withRouter } from '../../hoc/withRouter';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.params.userID;
    if (!userID) {
      userID = 26284;
    }
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
});

// let RedirectComponent = AuthNavigate(ProfileContainer);
// let WithUrlDataContainerComponent = (props) => {
//   return <RedirectComponent {...props} params={useParams()} />;
// };
// export default connect(mapStateToProps, { getUserProfile })(
//   WithUrlDataContainerComponent
// );
export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  AuthNavigate
)(ProfileContainer);
