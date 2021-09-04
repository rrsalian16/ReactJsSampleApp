/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const FormikField = (props) => {
  const { name, type, getFieldProps } = props;
  return (
    <div>
      <Field name={name} type={type} {...getFieldProps} />
      <ErrorMessage className="text-danger" name={name}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

FormikField.prototype = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormikField.defaultProps = {
  type: 'text',
};

export default FormikField;
