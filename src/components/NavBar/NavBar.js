import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <>
      <div
        className="container mt-2"
        style={{
          backgroundColor: '#A9A9C5',
          borderRadius: '20px',
        }}
      >
        <div className="row align-items-start">
          <div className="col">
            <nav className={s.nav}>
              <div>
                <NavLink
                  to="/profile"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Profile
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dialogs"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Messages
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/news"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  News
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/music"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Music
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/settings"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Settings
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/users"
                  className={(navData) =>
                    navData.isActive ? s.active : s.item
                  }
                >
                  Users
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className="container mt-5"
        style={{
          backgroundColor: '#A9A9C5',
          borderRadius: '20px',
        }}
      >
        <div className="row align-items-start">
          <div className="col">
            <div className={s.online}>
              <h4>Currently Online:</h4>
              <div>
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  className={s.photo}
                  alt=""
                />
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  className={s.photo}
                  alt=""
                />
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  className={s.photo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
