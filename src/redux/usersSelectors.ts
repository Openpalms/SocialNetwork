import { AppStateType } from './reduxStore';

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
export const getTotalCount = (state: AppStateType) => {
  return state.usersPage.totalCount;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
export const getIsButtonClicked = (state: AppStateType) => {
  return state.usersPage.isButtonClicked;
};
export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};
