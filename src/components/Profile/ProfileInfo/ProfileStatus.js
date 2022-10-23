import { useState } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [text, setText] = useState(props.status);
  return (
    <>
      {!editMode ? (
        <div>
          <span
            onDoubleClick={() => {
              setEditMode(true);
            }}
          >
            {props.status || 'status'}
          </span>
        </div>
      ) : (
        <div>
          <input
            value={text || 'change me'}
            onChange={(e) => {
              setText(e.currentTarget.value);
            }}
            autoFocus={true}
            onBlur={() => {
              setEditMode(false);
              props.updateStatus(text);
            }}
          ></input>
        </div>
      )}
    </>
  );
};
export default ProfileStatus;
