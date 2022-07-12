import { Input } from "@components/Form/Input";
import React from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "./index.module.scss";
import { LoginRequest } from "@interfaces/auth";
import { getProfile, login } from "@services/auth";
import { useAppDispatch } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import { authActions } from "@store/slices/auth";
import useNotification from "@hooks/useNotification";

interface ILogin {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const { showToast } = useNotification();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      dispatch(authActions.saveProfile(res));
    } catch (error: any) {
      showToast("error", error.message);
    }
  };

  const onSubmit = async (values: ILogin, actions: FormikHelpers<ILogin>) => {
    // console.log("values", values);
    // console.log("actions", actions);
    try {
      const params: LoginRequest = {
        Email: values.username,
        Password: values.password,
      };
      const res = await login(params);
      localStorage.setItem("accessToken", res.AccessToken);

      dispatch(authActions.login(res.AccessToken));
      await fetchProfile();
      navigate("/");
      showToast("success", "Login success");
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
    } catch (error: any) {
      showToast("error", error.message);
    }
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
            <div className={styles.login}>
              <div className={styles.card}>
                <div className={styles.cardLeft}></div>
                <div className={styles.cardRight}>
                  <div className={styles.logo}>LOGO</div>
                  <div className={styles.title}>SAVVYCOM</div>
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
                    <button className={styles.formButton} type="submit">
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
