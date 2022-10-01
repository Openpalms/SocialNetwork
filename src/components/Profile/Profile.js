import s from './Profile.module.css';
import Posts from './Posts//Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.item}>
      <ProfileInfo />
      <Posts
        posts={props.state.posts}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  );
};
export default Profile;
