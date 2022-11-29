import { stopSubmit } from 'redux-form';
import { authAPI, SecurityAPI } from '../api/api';
import { ResultCodes } from '../types/types';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null,
};
export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType => {
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

type setUserDataType = {
  type: typeof SET_USER_DATA;
  data: setUserDataActionDataType;
};
type setUserDataActionDataType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
export const setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUserDataType => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});
export default authReducer;

type getCaptchaUrlSuccessType = {
  type: typeof SET_CAPTCHA_URL;
  data: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessType => ({
  type: SET_CAPTCHA_URL,
  data: { captchaUrl },
});

export const getAuthUserData =
  (): any =>
  (dispatch: any): any => {
    return authAPI.me().then((response) => {
      if (response.resultCode === ResultCodes.success) {
        let { id, email, login } = response.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) =>
  (dispatch: any) => {
    authAPI.login(email, password, rememberMe, captcha).then((response) => {
      if (response.resultCode === ResultCodes.success) {
        //OK
        dispatch(getAuthUserData());
      } else {
        ///NOT OK
        if (response.resultCode === ResultCodes.captchaIsRequired) {
          dispatch(getCaptchaImage());
        }
        let message =
          response.messages.length > 0 ? response.messages[0] : 'some error';
        dispatch(
          stopSubmit('login', {
            _error: message,
          })
        );
      }
    });
  };

export const getCaptchaImage = () => (dispatch: any) => {
  SecurityAPI.getCaptchaImage().then((response) => {
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  });
};

export const logout = () => (dispatch: any) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === ResultCodes.success) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};
