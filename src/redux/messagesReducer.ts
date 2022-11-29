const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

type messages = {
  msg: string;
  id: number;
};
type names = {
  id: number;
  name: string;
};
const initialState = {
  messages: [
    { msg: 'yo', id: 1 },
    { msg: 'yoy', id: 2 },
    { msg: 'hey', id: 3 },
    { msg: 'hurry up', id: 4 },
    { msg: 'kekw', id: 5 },
  ] as Array<messages>,
  dialogsData: [
    { id: 1, name: 'Daniel' },
    { id: 2, name: 'Sonya' },
    { id: 3, name: 'Sophia' },
    { id: 4, name: 'Gleb' },
    { id: 5, name: 'Sasha' },
  ] as Array<names>,
};

export type initialStateType = typeof initialState;

const messagesReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return { ...state, messages: action.changedMessage };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { msg: action.newMessageText, id: 6 }],
      };
    default:
      return state;
  }
};

type addTextActionCreatorType = {
  type: typeof ADD_NEW_MESSAGE;
  newMessageText: string;
};

export const addTextActionCreator = (
  newMessageText: string
): addTextActionCreatorType => {
  return {
    type: ADD_NEW_MESSAGE,
    newMessageText,
  };
};

export default messagesReducer;
