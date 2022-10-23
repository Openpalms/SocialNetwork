import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'hey my post', likes: 10 },
    { id: 2, message: 'sup ya`ll', likes: 11 },
    { id: 3, message: 'whazzup', likes: 5 },
  ],
  newPostText: 'hello',
  profile: '',
  status: `I'm status`,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: action.newMessageText, likes: 0 },
        ],
        newPostText: action.newMessageText,
      };
    }
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.changedText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = (newMessageText) => ({
  type: ADD_POST,
  newMessageText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const onTextChangeActionCreator = (text) => {
  return {
    type: UPDATE_POST_TEXT,
    changedText: text,
  };
};

export const setStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
