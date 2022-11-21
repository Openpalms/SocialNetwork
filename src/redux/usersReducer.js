import { userAPI } from '../api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const TOGGLE_BUTTON = 'TOGGLE_BUTTON';
const initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 2,
  isFetching: false,
  isButtonClicked: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.count };
    case TOGGLE_LOADER:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_BUTTON:
      return {
        ...state,
        isButtonClicked: action.isFetching
          ? [...state.isButtonClicked, action.userID]
          : state.isButtonClicked.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

export const acceptFollow = (userID) => ({
  type: FOLLOW,
  userID,
});
export const acceptUnfollow = (userID) => ({
  type: UNFOLLOW,
  userID,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setPage = (currentPage) => ({
  type: SET_PAGE,
  currentPage,
});
export const setTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_LOADER,
  isFetching,
});
export const toggleIsButtonClicked = (isFetching, userID) => ({
  type: TOGGLE_BUTTON,
  isFetching,
  userID,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(currentPage));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalCount(response.totalCount));
    });
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsButtonClicked(true, id));
    userAPI.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(acceptFollow(id));
      }
      dispatch(toggleIsButtonClicked(false, id));
    });
  };
};
export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsButtonClicked(true, id));
    userAPI.unfollowUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(acceptUnfollow(id));
      }
      dispatch(toggleIsButtonClicked(false, id));
    });
  };
};

export default usersReducer;
