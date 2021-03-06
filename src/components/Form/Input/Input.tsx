/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './Input.scss';
import cx from 'classnames';
// rafc + Tab
// rafce + Tab

interface Props {
  name: string;
  label?: string;
  value: string | number;
  placeholder?: string;
  required?: boolean;
  field: any;
  form: any;
}

export const Input = ({ label, placeholder, required = false, ...props }: Props) => {
  const { field, form } = props;
  const fieldName = field.name;
  const { errors, touched } = form;
  const showError = errors[fieldName] && touched[fieldName];

  return (
    <>
      {label && (
        <label htmlFor={fieldName} className="input__label">
          {label}
          {required ? <b className="input__label--required">*</b> : <></>}
        </label>
      )}
      <input
        {...field}
        placeholder={placeholder}
        className={cx('input--default', { 'input--error': showError })}
        {...props}
      />
      <div className="input__text--error">{showError ? errors[fieldName] : ''}</div>
    </>
  );
};
