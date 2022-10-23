const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const initialState = {
  messages: [
    { msg: 'yo', id: 1 },
    { msg: 'yoy', id: 2 },
    { msg: 'hey', id: 3 },
    { msg: 'hurry up', id: 4 },
    { msg: 'kekw', id: 5 },
  ],
  dialogsData: [
    { id: 1, name: 'Daniel' },
    { id: 2, name: 'Sonya' },
    { id: 3, name: 'Sophia' },
    { id: 4, name: 'Gleb' },
    { id: 5, name: 'Sasha' },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return { ...state, newMessageText: action.changedMessage };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { msg: action.newMessageText, id: 6 }],
      };
    default:
      return state;
  }
};

export const addTextActionCreator = (newMessageText) => {
  return {
    type: ADD_NEW_MESSAGE,
    newMessageText,
  };
};

export default messagesReducer;
