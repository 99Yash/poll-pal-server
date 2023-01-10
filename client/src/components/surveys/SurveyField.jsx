import React from 'react';

const SurveyField = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        onChange={props.changeInputHandler}
      />
    </div>
  );
};

export default SurveyField;
