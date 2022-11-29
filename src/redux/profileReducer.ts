import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';
const SET_USER_INFO = 'SET_USER_INFO';

type postsType = {
  id: number;
  message: string;
  likes: number;
};

const initialState = {
  posts: [
    { id: 1, message: 'hey my post', likes: 10 },
    { id: 2, message: 'sup ya`ll', likes: 11 },
    { id: 3, message: 'whazzup', likes: 5 },
  ] as Array<postsType>,
  newPostText: 'hello',
  status: `I'm status`,
  profile: null as any | null,
  info: {
    userId: null as number | null,
    aboutMe: null as string | null,
    fullName: null as string | null,
    lookingForAJob: true as boolean | null,
    lookingForAJobDescription: null as string | null,
    contacts: {
      facebook: null as string | null,
      github: null as string | null,
      instagram: 'ig.com/ga104kin' as string | null,
      mainLink: null as string | null,
      twitter: null as string | null,
      vk: null as string | null,
      website: null as string | null,
      youtube: null as string | null,
    },
  },
};

const profileReducer = (state = initialState, action: any) => {
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

export type addPostActionCreatorType = {
  type: typeof ADD_POST;
  newMessageText: string;
};
export const addPostActionCreator = (
  newMessageText: string
): addPostActionCreatorType => ({
  type: ADD_POST,
  newMessageText,
});

type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: object;
};
export const setUserProfile = (profile: object): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});
export const getUserProfile = (userId: number) => (dispatch: any) => {
  profileAPI.getUserProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
type onTextChangeActionCreatorType = {
  type: typeof UPDATE_POST_TEXT;
  changedText: string;
};
export const onTextChangeActionCreator = (
  text: string
): onTextChangeActionCreatorType => {
  return {
    type: UPDATE_POST_TEXT,
    changedText: text,
  };
};

type setStatusType = {
  type: typeof SET_USER_STATUS;
  status: string;
};
export const setStatus = (status: string): setStatusType => ({
  type: SET_USER_STATUS,
  status,
});
type successSavePhotoType = {
  type: typeof SET_PHOTO_SUCCESS;
  file: string;
};
export const successSavePhoto = (file: string): successSavePhotoType => ({
  type: SET_PHOTO_SUCCESS,
  file,
});
export const getStatus = (userID: number) => (dispatch: any) => {
  profileAPI.getStatus(userID).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const setInfo = (info: string) => ({
  type: SET_USER_INFO,
  info,
});
export const updateInfo = (info: string) => (dispatch: any) => {
  profileAPI.updateInfo(info).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setInfo(info));
    }
  });
};
export const savePhoto = (file: string) => async (dispatch: any) => {
  await profileAPI.savePhoto(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(successSavePhoto(response.data.data.photos.small));
    }
  });
};
export default profileReducer;
