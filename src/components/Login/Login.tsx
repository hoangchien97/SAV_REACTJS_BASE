import { Input } from '@components/Form/Input';
import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.scss';
import { LoginRequest } from '@interfaces/auth';
import { getProfile, login } from '@services/auth';
import { useAppDispatch } from '@store/hooks';
import { useNavigate } from 'react-router-dom';
import { authActions } from '@store/slices/auth';
import { toast } from 'react-toastify';
import { Button, Space } from 'antd';
import { Svg } from '@components/Common/Svg';

interface ILogin {
  username: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required.').email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
  });

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      dispatch(authActions.saveProfile(res));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (values: ILogin, { setSubmitting }: FormikHelpers<ILogin>) => {
    // console.log("values", values);
    // console.log("actions", actions);
    setSubmitting(true);
    try {
      const params: LoginRequest = {
        Email: values.username,
        Password: values.password,
      };
      const res = await login(params);

      dispatch(authActions.login(res.AccessToken));
      await fetchProfile();
      navigate('/');
      toast.success('Login success');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      // onSubmit={(values) => console.log("Submit: ", values)}
    >
      {formikProps => {
        // do something here ...
        const { isValid, dirty, isSubmitting } = formikProps;
        // console.log({ values, errors, touched });
        return (
          <>
            <div className={styles.login}>
              <div className={styles.card}>
                <div className={styles.cardLeft}></div>
                <div className={styles.cardRight}>
                  <Svg name="logo" width={40} height={40} />
                  <div className={styles.title}></div>
                  <Form style={{ width: '100%', padding: '0 2rem' }}>
                    <Field name="username" component={Input} placeholder="Username" />
                    <Field
                      name="password"
                      type="password"
                      component={Input}
                      fullWidth
                      placeholder="Password"
                    />
                    <Space style={{ display: 'flex' }}>
                      <Button
                        type="primary"
                        size="large"
                        disabled={!(isValid && dirty)}
                        loading={isSubmitting}
                        htmlType="submit"
                        style={{ width: '100px' }}
                      >
                        Login
                      </Button>
                    </Space>
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
