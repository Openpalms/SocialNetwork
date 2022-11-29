import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../api/api';
import { userType, ResultCodes } from '../types/types';
import { AppStateType } from './reduxStore';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_LOADER = 'TOGGLE_LOADER';
const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

const initialState = {
  users: [] as Array<userType>,
  pageSize: 10,
  totalCount: 0,
  currentPage: 2,
  isFetching: false,
  isButtonClicked: [] as Array<number>, ///array of userIDs
};

type initialStateType = typeof initialState;
const usersReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
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
type ActionTypes =
  | acceptFollowType
  | acceptUnfollowType
  | setUsersType
  | setPageType
  | setTotalCountType
  | toggleIsFetchingType
  | toggleIsButtonClickedType;
type acceptFollowType = {
  type: typeof FOLLOW;
  userID: number;
};
export const acceptFollow = (userID: number): acceptFollowType => ({
  type: FOLLOW,
  userID,
});
type acceptUnfollowType = {
  type: typeof UNFOLLOW;
  userID: number;
};
export const acceptUnfollow = (userID: number): acceptUnfollowType => ({
  type: UNFOLLOW,
  userID,
});
type setUsersType = {
  type: typeof SET_USERS;
  users: Array<userType>;
};
export const setUsers = (users: Array<userType>): setUsersType => ({
  type: SET_USERS,
  users,
});
type setPageType = {
  type: typeof SET_PAGE;
  currentPage: number;
};
export const setPage = (currentPage: number): setPageType => ({
  type: SET_PAGE,
  currentPage,
});
type setTotalCountType = {
  type: typeof SET_TOTAL_COUNT;
  count: number;
};
export const setTotalCount = (count: number): setTotalCountType => ({
  type: SET_TOTAL_COUNT,
  count,
});
type toggleIsFetchingType = {
  type: typeof TOGGLE_LOADER;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingType => ({
  type: TOGGLE_LOADER,
  isFetching,
});
type toggleIsButtonClickedType = {
  type: typeof TOGGLE_BUTTON;
  isFetching: boolean;
  userID: number;
};
export const toggleIsButtonClicked = (
  isFetching: boolean,
  userID: number
): toggleIsButtonClickedType => ({
  type: TOGGLE_BUTTON,
  isFetching,
  userID,
});

type Thunk = ThunkAction<void, AppStateType, unknown, ActionTypes>;

export const getUsers = (currentPage: number, pageSize: number): Thunk => {
  return (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(currentPage));
    userAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalCount(response.totalCount));
    });
  };
};

export const follow = (id: number): Thunk => {
  return (dispatch) => {
    dispatch(toggleIsButtonClicked(true, id));
    userAPI.followUser(id).then((response) => {
      if (response.data.resultCode === ResultCodes.success) {
        dispatch(acceptFollow(id));
      }
      dispatch(toggleIsButtonClicked(false, id));
    });
  };
};
export const unfollow = (id: number): Thunk => {
  return (dispatch) => {
    dispatch(toggleIsButtonClicked(true, id));
    userAPI.unfollowUser(id).then((response) => {
      if (response.data.resultCode === ResultCodes.success) {
        dispatch(acceptUnfollow(id));
      }
      dispatch(toggleIsButtonClicked(false, id));
    });
  };
};

export default usersReducer;
