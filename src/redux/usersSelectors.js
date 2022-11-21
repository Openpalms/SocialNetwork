export const getUsersSelector = (state) => {
  return state.usersPage.users;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
}; 
export const getTotalCount = (state) => {
  return state.usersPage.totalCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getIsButtonClicked = (state) => {
  return state.usersPage.isButtonClicked;
};
export const getIsAuth = (state) => {
  return state.auth.isAuth;
};
