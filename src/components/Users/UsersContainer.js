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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isButtonClicked: state.usersPage.isButtonClicked,
    isAuth: state.auth.isAuth,
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
