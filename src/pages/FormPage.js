import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const FormPage = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, 'Must be less than 20').min(4, '*Must be more than 3').required('*FirstName is required'),
        lastName: Yup.string().max(10, 'Must be less than 20').required('*LastName is require'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="d-flex m-3 flex-row justify-content-center align-items-center">
          <div className="col-md-4 d-flex flex-column align-items-start">
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" className="w-100" />
            <ErrorMessage name="firstName">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-start">
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" className="w-100" />
            <ErrorMessage name="lastName">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <button className="mt-3 px-3 py-2 rounded border border-success" type="submit">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormPage;
