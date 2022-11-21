import { useEffect, useState } from 'react';

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [text, setText] = useState(props.status);
  useEffect(() => {
    setText(props.status);
  }, [props.status]);
  return (
    <>
      {!editMode ? (
        <div>
          <span
            onDoubleClick={() => {
              setEditMode(true);
            }}
          >
            {props.status || 'Default Status '}
          </span>
        </div>
      ) : (
        <div>
          <input
            value={text || ''}
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
