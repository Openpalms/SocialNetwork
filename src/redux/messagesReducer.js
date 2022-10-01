const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.changedMessage;
      return state;
    case ADD_NEW_MESSAGE:
      let newMessage = {
        msg: state.newMessageText,
        id: 6,
      };
      state.messages.push(newMessage);
      return state;
    default:
      return state;
  }
};

export const addTextActionCreator = () => {
  return {
    type: ADD_NEW_MESSAGE,
  };
};

export const onDialogChangeActionCreator = (text) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    changedMessage: text,
  };
};
export default messagesReducer;
