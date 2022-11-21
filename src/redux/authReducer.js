import { stopSubmit } from 'redux-form';
import { authAPI, SecurityAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});
export default authReducer;

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  data: { captchaUrl },
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha).then((response) => {
    if (response.data.resultCode === 0) {
      //OK
      dispatch(getAuthUserData());
    } else {
      ///NOT OK
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaImage());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : 'some error';
      dispatch(
        stopSubmit('login', {
          _error: message,
        })
      );
    }
  });
};

export const getCaptchaImage = () => (dispatch) => {
  SecurityAPI.getCaptchaImage().then((response) => {
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData(null, null, null, false, false));
    }
  });
};
