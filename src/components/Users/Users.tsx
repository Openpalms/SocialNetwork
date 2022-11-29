import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Pagination from './ Pagination';
import { userType } from '../../types/types';

type Props = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (arg0: number) => void;
  users: Array<userType>;
  follow: (arg0: number) => void;
  unfollow: (arg0: number) => void;
  isButtonClicked: Array<number>;
};

let Users: FC<Props> = (props) => {
  return (
    <div>
      <Pagination {...props} />
      {props.users.map((user: userType) => (
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
