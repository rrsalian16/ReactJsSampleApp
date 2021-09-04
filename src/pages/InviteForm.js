import { FieldArray, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikField from '../components/FormikField';

const InviteForm = () => {
  const initialValues = {
    friends: [{ name: '', email: '' }],
  };
  return (
    <div className="bg-primary py-4 px-2 h-100">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          friends: Yup.array().of(
            Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email').required('Required'),
            })
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting, errors, touched, getFieldProps }) => (
          <Form
            className="bg-white py-5 px-4 m-auto"
            style={{
              maxWidth: '500px',
              borderRadius: '10px',
              border: 'none',
              boxShadow: '0px 0px 1px black',
            }}
          >
            <FieldArray name="friends">
              {({ push, remove }) => (
                <React.Fragment>
                  {values.friends &&
                    values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
                      <div className="row" key={index}>
                        <div className="col">
                          <FormikField name={`friends[${index}].name`} getFieldProps={getFieldProps(`friends[${index}].name`)} />
                        </div>
                        <div className="col">
                          <FormikField
                            name={`friends[${index}].email`}
                            type="email"
                            getFieldProps={getFieldProps(`friends[${index}].email`)}
                          />
                        </div>
                        <div className="col">
                          <button type="button" onClick={() => remove(index)}>
                            x
                          </button>
                        </div>
                      </div>
                    ))}
                  <button
                    type="button"
                    onClick={() => push({ name: '', email: '' })}
                    disabled={isSubmitting}
                    className=" w-100 my-2 bg-secondary d-block"
                  >
                    Add Friend
                  </button>
                </React.Fragment>
              )}
            </FieldArray>
            <button type="submit" disabled={isSubmitting} className=" w-100 my-2">
              Invite
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InviteForm;
