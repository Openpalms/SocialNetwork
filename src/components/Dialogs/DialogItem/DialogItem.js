import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
  return (
    <div className={s.item}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
