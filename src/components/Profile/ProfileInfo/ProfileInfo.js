import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/4MFiRr9vFnbWzYoNSPiYXy/fca130dd40da59b06e83ee8d5789a23e/file-converter-shutterstock.jpg"
          alt="ProfilePhoto" className={s.img}
        />
      </div>
      <div className={s.block}> ava + desc </div>
    </div>
  );
};
export default ProfileInfo;
