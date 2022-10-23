import axios from 'axios';
import s from './users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div>
      <button onClick={getUsers}>Get Users </button>
      {props.users.map((user) => (
        <div key={user.id} className={s.wrapper}>
          <span>
            <div>
              <img
                className={s.img}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt="avatar"
              />
            </div>
            <div className={s.buttons}>
              {user.followed ? (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.follow(user.id);
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
