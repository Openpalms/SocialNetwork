import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import {
  setPage,
  toggleIsButtonClicked,
  getUsers,
  follow,
  unfollow,
} from '../../redux/usersReducer';
import Preloader from '../Common/Preloader/Preloader';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import { compose } from 'redux';
import {
  getUsersSelector,
  getCurrentPage,
  getIsAuth,
  getIsButtonClicked,
  getIsFetching,
  getPageSize,
  getTotalCount,
} from '../../redux/usersSelectors';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (item) => {
    this.props.getUsers(item, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          unfollow={this.props.follow}
          follow={this.props.unfollow}
          isButtonClicked={this.props.isButtonClicked}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isButtonClicked: getIsButtonClicked(state),
    isAuth: getIsAuth(state),
  };
};

// let   = AuthNavigate(UsersAPI);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setPage,
//   toggleIsButtonClicked,
//   getUsers,
// })(RedirectComponent);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setPage,
    toggleIsButtonClicked,
    getUsers,
  }),
  AuthNavigate
)(UsersAPI);
