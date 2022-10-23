import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.spans}>
        {pages.map((item) => {
          if (item < 20) {
            return (
              <span
                className={props.currentPage === item ? s.selected : ''}
                key={item}
                onClick={() => {
                  props.onPageChange(item);
                }}
              >
                {item}
              </span>
            );
          }
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={s.wrapper}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img
                  className={s.img}
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div className={s.buttons}>
              {user.followed ? (
                <button
                  disabled={props.isButtonClicked.some((id) => id === user.id)}
                  className={s.btn}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  disabled={props.isButtonClicked.some((id) => id === user.id)}
                  className={s.btn}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>
          <span className={s.info}>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{'user.location.country'}</div>
              <div>{'user.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
