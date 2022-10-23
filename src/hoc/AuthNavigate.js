import { Navigate } from 'react-router-dom';
// import { connect } from 'react-redux';

// let mapStateToPropsNagivate = (state) => ({
//   isAuth: state.auth.isAuth,
// });

export let AuthNavigate =
  (Component) =>
  ({ ...props }) => {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
///// IsAuth is not working
