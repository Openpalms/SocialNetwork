import React from 'react';
import s from './Forms.module.css';

const Blank = (props) => {
  return (
    <div className={s.form}>
      <div
        className={`${props.meta.error && props.meta.touched ? s.error : null}`}
      >
        {React.cloneElement(props.children, { ...props.input })}
      </div>
      {props.meta.error && props.meta.touched ? (
        <span>{props.meta.error}</span>
      ) : (
        ''
      )}
    </div>
  );
};

export const TextArea = (props) => {
  return (
    <Blank {...props}>
      <textarea />
    </Blank>
  );
};

export const Input = (props) => {
  return (
    <Blank {...props}>
      <input
        {...props.input}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Blank>
  );
};
