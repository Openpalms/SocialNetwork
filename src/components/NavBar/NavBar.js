import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends';
const NavBar = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
    <div className={s.online}>
      <h4 >Currently Online:</h4>
    </div>
      {props.state.friends.map(item => {
        return (
          <Friends name={item.name} key={item.id} />
        )
      })}
    </nav>
  );
};

export default NavBar;
