import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1;
  let rightPortionPageNumber = portionNumber * props.pageSize;

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.spans}>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Left
          </button>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((item) => {
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
          })}
        {pagesCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Right
          </button>
        )}
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
