import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div></div>
      <div className={s.block}>
        <img src={props.profile.photos.small} alt="av" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>
          <div>Information:</div>
          <div>{props.profile.aboutMe}</div>
          <span>
            {props.profile.lookingForAJob === false
              ? 'I am not looking for job right now'
              : 'I am looking for a job'}
          </span>
          <div>Contact me : {props.profile.contacts.github}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
