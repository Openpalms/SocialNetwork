import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hey my post', likes: 10 },
        { id: 2, message: 'sup ya`ll', likes: 11 },
        { id: 3, message: 'whazzup', likes: 5 },
      ],
      newPostText: 'hello',
    },
    messagesPage: {
      messages: [
        { msg: 'yo', id: 1 },
        { msg: 'yoy', id: 2 },
        { msg: 'hey', id: 3 },
        { msg: 'hurry up', id: 4 },
        { msg: 'kekw', id: 5 },
      ],
      newMessageText: 'js',
      dialogsData: [
        { id: 1, name: 'Daniel' },
        { id: 2, name: 'Sonya' },
        { id: 3, name: 'Sophia' },
        { id: 4, name: 'Gleb' },
        { id: 5, name: 'Sasha' },
      ],
    },
    navBar: {
      friends: [
        { id: 1, name: 'oleg' },
        { id: 2, name: 'sasha' },
        { id: 3, name: 'gleb' },
      ],
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._state.navBar = navbarReducer(this._state.navBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;

/// tasks for today - dispatch all other functions /// done
