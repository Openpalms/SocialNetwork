import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
const Dialogs = (props) => {
  const addNewMessage = (value) => {
    props.addNewDialogText(value.newMessageText);
  };

  if (!props.isAuth) return <Navigate to={'/login'} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.messagesPage.dialogsData.map((item) => {
          return (
            <div className={s.chat} key={item.id}>
              <img
                src="https://cs14.pikabu.ru/post_img/2021/05/08/12/16205042291362743.jpg"
                alt="bee"
                className={s.img}
              />
              <DialogItem key={item.id} name={item.name} id={item.id} />
            </div>
          );
        })}
      </div>
      <div className={s.messages}>
        {props.messagesPage.messages.map((item) => {
          return <Message key={item.id} message={item.msg} />;
        })}
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={'textarea'}
          name="newMessageText"
          placeholder="Enter new message"
        ></Field>
        <button>Add message</button>
      </form>
    </>
  );
};
const AddMessageFormRedux = reduxForm({ form: 'AddMessageForm' })(
  AddMessageForm
);
export default Dialogs;
