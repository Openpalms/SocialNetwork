import s from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Posts = (props) => {
  let newPostElement = React.createRef();

  let onAddMsg = (value) => {
    props.addMsg(value.newPostText);
  };

  const onTextChange = () => {
    let text = newPostElement.current.value;
    props.onTextChange(text);
  };
  return (
    <div>
      <h3>My posts</h3>
      <div className={s.postWrapper}>
        {props.posts.map((item) => {
          return (
            <Post message={item.message} key={item.id} like={item.likes} />
          );
        })}
      </div>
      <PostReduxForm onSubmit={onAddMsg} />
    </div>
  );
};

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name="newPostText"
        placeholder="Enter new message"
      ></Field>
      <div>
        <button className={s.btn}>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: 'addPostForm',
})(PostsForm);
export default Posts;
