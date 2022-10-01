import s from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import {
  addPostActionCreator,
  onTextChangeActionCreator,
} from '../../../redux/profileReducer';

const Posts = (props) => {
  let newPostElement = React.createRef();
  let addMsg = () => {
    props.dispatch(addPostActionCreator());
  };

  const onTextChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(onTextChangeActionCreator(text));
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onTextChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button className={s.btn} onClick={addMsg}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.postWrapper}>
        {props.posts.map((item) => {
          return (
            <Post message={item.message} key={item.id} like={item.likes} />
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
