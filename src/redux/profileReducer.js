import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const SET_USER_INFO = 'SET_USER_INFO';

const initialState = {
  posts: [
    { id: 1, message: 'hey my post', likes: 10 },
    { id: 2, message: 'sup ya`ll', likes: 11 },
    { id: 3, message: 'whazzup', likes: 5 },
  ],
  newPostText: 'hello',
  profile: '',
  status: `I'm status`,
  info: {
    userId: null,
    aboutMe: null,
    fullName: null,
    lookingForAJob: true,
    lookingForAJobDescription: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: 'ig.com/ga104kin',
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null,
    },
  },
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
    case SET_USER_INFO:
      return { ...state, info: action.info };
    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: { small: action.file, large: action.file },
        },
      };
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
export const successSavePhoto = (file) => ({
  type: SET_PHOTO_SUCCESS,
  file,
});
export const getStatus = (userID) => (dispatch) => {
  profileAPI.getStatus(userID).then((response) => {
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
export const setInfo = (info) => ({
  type: SET_USER_INFO,
  info,
});
export const updateInfo = (info) => (dispatch) => {
  profileAPI.updateInfo(info).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setInfo(info));
    }
  });
};
export const savePhoto = (file) => async (dispatch) => {
  await profileAPI.savePhoto(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(successSavePhoto(response.data.data.photos.small));
    }
  });
};
export default profileReducer;
