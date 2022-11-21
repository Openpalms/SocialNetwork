import s from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  required,
  maxLengthCreator,
} from '../../../utils/validators/validators';
import { TextArea } from '../../Common/Forms/Forms';
const maxLength10 = maxLengthCreator(10);

const Posts = (props) => {
  const onAddMsg = (value) => {
    props.addMsg(value.newPostText);
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
        component={TextArea}
        name="newPostText"
        placeholder="Enter new message"
        validate={[required, maxLength10]}
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
