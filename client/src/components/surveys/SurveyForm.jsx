import React from 'react';
import {
  changeValue,
  initForm,
  validateForm,
  setErrors,
} from 'redux-toolkit-form';
import { formErrors, formValues, isValid } from 'redux-toolkit-form';
import { useDispatch } from 'react-redux';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const SurveyForm = () => {
  const dispatch = useDispatch();

  const form = {
    values: {
      title: {
        required: true,
        validators: [],
      },
      body: {
        required: true,
        validators: [],
      },
      subject: {
        required: true,
        validators: [],
      },
      emails: {
        required: true,
        validators: [],
      },
    },
  };

  const changeInputHandler = (e) => {
    e.preventDefault();
    dispatch(changeValue(e));
  };

  return (
    <div>
      <form>
        <div>
          {/* <label htmlFor="title">Survey Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => {
              dispatch(changeValue(e));
            }}
          /> */}
          <SurveyField type="text" name="title" onChange={changeInputHandler} />
          <SurveyField
            type="text"
            name="subject"
            onChange={changeInputHandler}
          />
          <SurveyField type="text" name="body" onChange={changeInputHandler} />
          <SurveyField
            type="text"
            name="emails"
            onChange={changeInputHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
