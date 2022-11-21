import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileData from './ProfileData';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const onInputChange = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col shadow text-start p-2 m-2"
            style={{
              backgroundColor: '#A9A9C5',
              borderRadius: '20px',
            }}
          >
            <img
              src={
                !props.profile.photos.small
                  ? 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
                  : props.profile.photos.small
              }
              alt="av"
              className={s.img}
            />

            <div>
              <span>
                {!props.isOwner && (
                  <>
                    {' '}
                    <h5> Upload new image</h5>{' '}
                    <input type="file" onChange={onInputChange} />
                  </>
                )}
              </span>
            </div>
          </div>
          <div
            className="col text-end m-3"
            style={{
              backgroundColor: '#A9A9C5',
              borderRadius: '20px',
            }}
          >
            <b>Status: </b>

            <ProfileStatus
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <div>
              <ProfileData
                fullName={props.profile.fullName}
                aboutMe={props.profile.aboutMe}
                lookingForAJob={props.profile.lookingForAJob}
                contacts={props.profile.contacts}
                updateInfo={props.updateInfo}
                userId={props.profile.userId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
