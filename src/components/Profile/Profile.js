import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {
  return (
    <div className={s.item}>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        updateInfo={props.updateInfo}
      />
      <PostsContainer />
    </div>
    // <div class="container ">
    //   <div class="row">
    //     <div class="col">
    //       <ProfileInfo
    //         isOwner={props.isOwner}
    //         profile={props.profile}
    //         status={props.status}
    //         updateStatus={props.updateStatus}
    //         savePhoto={props.savePhoto}
    //         updateInfo={props.updateInfo}
    //       />
    //     </div>
    //     <div class="col ">
    //       <PostsContainer />{' '}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Profile;
