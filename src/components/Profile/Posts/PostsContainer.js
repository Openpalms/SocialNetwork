import {
  addPostActionCreator,
  onTextChangeActionCreator,
} from '../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMsg: (newMessageText) => {
      dispatch(addPostActionCreator(newMessageText));
    },
    onTextChange: (text) => {
      dispatch(onTextChangeActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
