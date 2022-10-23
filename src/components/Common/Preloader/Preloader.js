import loader from '../../../assets/images/loader.svg';
import s from '../../Users/users.module.css';
let Preloader = (props) => {
  return (
    <div>
      <img src={loader} alt="loader" className={s.loader} />
    </div>
  );
};

export default Preloader;
