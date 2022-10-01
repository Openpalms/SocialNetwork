import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {
  addTextActionCreator,
  onDialogChangeActionCreator,
} from '../../redux/messagesReducer';

const Dialogs = (props) => {
  const newTextElement = React.createRef();

  const addText = () => {
    props.dispatch(addTextActionCreator());
  };

  const onDialogChange = () => {
    let text = newTextElement.current.value;
    props.dispatch(onDialogChangeActionCreator(text));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.dialogsData.map((item) => {
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
        {props.state.messages.map((item) => {
          return <Message key={item.id} message={item.msg} />;
        })}
      </div>
      <div>
        <textarea
          ref={newTextElement}
          onChange={onDialogChange}
          value={props.newMessageText}
        ></textarea>
        <button onClick={addText}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
