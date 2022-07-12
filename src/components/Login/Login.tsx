import { Input } from "@components/Form/Input";
import React from "react";
import { useState } from "react";
import { Formik, Form, FastField, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import "./Login.scss";

interface ILogin {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("This field is required.")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const onSubmit = async (values: ILogin, actions: FormikHelpers<ILogin>) => {
    console.log("values", values);
    console.log("actions", actions);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // onSubmit={(values) => console.log("Submit: ", values)}
    >
      {(formikProps) => {
        // do something here ...
        // const { values, errors, touched } = formikProps;
        // console.log({ values, errors, touched });

        return (
          <>
            <div className="login">
              <div className="card">
                <div className="card__left"></div>
                <div className="card__right form">
                  <div className="login__logo">LOGO</div>
                  <div className="login__title">SAVVYCOM</div>
                  <Form>
                    <Field
                      name="username"
                      component={Input}
                      placeholder="Username"
                    />
                    <Field
                      name="password"
                      type="password"
                      component={Input}
                      placeholder="Password"
                    />
                    <button className="form__button" type="submit">
                      Submit
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Formik>
  );
};
