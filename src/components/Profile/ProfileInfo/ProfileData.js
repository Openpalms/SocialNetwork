import { useEffect, useState } from 'react';

const ProfileData = (props) => {
  let contacts = Object.values(props.contacts).filter(Boolean);
  let [editMode, setEditMode] = useState(false);
  let [name, setName] = useState(props.fullName);
  let [aboutMe, setaboutMe] = useState(props.aboutMe);
  let [lfjob, setLfjob] = useState(props.lookingForAJob);
  let [github, setGithub] = useState(props.contacts.github);
  let [lookingForAJobDescription, setLookingForAJobDescription] = useState(
    props.lookingForAJobDescription
  );

  const information = {
    userId: props.userId,
    aboutMe: aboutMe,
    fullName: name,
    lookingForAJob: lfjob,
    lookingForAJobDescription: lookingForAJobDescription,
    contacts: {
      github: github,
    },
  };
  useEffect(() => {
    setName(props.name);
    setaboutMe(props.aboutMe);
    setLfjob(props.lookingForAJob);
    setGithub(props.contacts.github);
    setLookingForAJobDescription(props.lookingForAJobDescription);
  }, [
    props.name,
    props.aboutMe,
    props.lookingForAJob,
    props.contacts.github,
    props.lookingForAJobDescription,
  ]);
  return (
    <form>
      <div>
        <b>Name: </b>
        {!editMode ? (
          <span> {props.fullName}</span>
        ) : (
          <input
            type="text"
            name="fullName"
            value={name || ''}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
          />
        )}
      </div>
      <div>
        <b>Description: </b>
        {!editMode ? (
          <span> {props.aboutMe}</span>
        ) : (
          <input
            type="text"
            name="aboutMe"
            value={aboutMe || ''}
            onChange={(e) => {
              setaboutMe(e.currentTarget.value);
            }}
          />
        )}
        <div>
          <b>Skills: </b>
          {!editMode ? (
            <span> {props.lookingForAJobDescription}</span>
          ) : (
            <input
              type="text"
              name="lookingForAJobDescription"
              value={lookingForAJobDescription || ''}
              onChange={(e) => {
                setLookingForAJobDescription(e.currentTarget.value);
              }}
            />
          )}
        </div>
      </div>
      <span>
        <b>Looking for a job: </b>
        {!editMode ? (
          <span> {props.lookingForAJob === false ? 'No.' : 'Yes.'}</span>
        ) : (
          <input
            name="lookingForAJob"
            type="checkbox"
            value={lfjob || ''}
            onChange={(e) => {
              setLfjob(e.currentTarget.value);
            }}
          />
        )}
      </span>
      <div>
        {!editMode ? (
          <span>
            {' '}
            {Object.values(props.contacts).some((x) => x !== null) ===
            false ? null : (
              <>
                <b> Contacts : </b>
                {contacts.map((c, i) => (
                  <div key={i}>{c}</div>
                ))}
              </>
            )}
          </span>
        ) : (
          <>
            <b> Contacts : </b>
            <p> github : </p>
            <input
              type="text"
              name="github"
              value={github || ''}
              onChange={(e) => {
                setGithub(e.currentTarget.value);
              }}
            />
          </>
        )}
      </div>
      {!editMode ? (
        <>
          <button
            type="button"
            className="btn btn-outline-light m-2"
            onClick={(e) => {
              e.preventDefault();
              setEditMode(true);
            }}
          >
            Update info
          </button>
        </>
      ) : (
        <span>
          <button
            type="button"
            className="btn btn-outline-light btn-sm m-2 "
            onClick={(e) => {
              e.preventDefault();
              setEditMode(false);
              props.updateInfo(information);
            }}
          >
            Save
          </button>

          <button
            type="button"
            className="btn btn-outline-light btn-sm m-2 "
            onClick={(e) => {
              e.preventDefault();
              setEditMode(false);
            }}
          >
            exit
          </button>
        </span>
      )}
    </form>
  );
};

export default ProfileData;
