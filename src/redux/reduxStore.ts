import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  messagesPage: messagesReducer,
  profilePage: profileReducer,
  navBar: navbarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});
type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
