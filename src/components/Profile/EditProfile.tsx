import { Input } from '@components/Form/Input';
import styled from '@emotion/styled';
import { ProfileResponse, UpdateProfileRequest } from '@interfaces/auth';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { authActions, selectUserProfile } from '@store/slices/auth';
import { Divider, Row, Col, Button, Space } from 'antd';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { REGEX } from '@constants/index';
import * as Yup from 'yup';
import { updateProfile } from '@services/auth';
import { toast } from 'react-toastify';

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 1rem;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.span`
  margin-bottom: 6px;
`;

const Description = styled.span``;

export const EditProfile = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUserProfile) as ProfileResponse;

  const initialValues = { ...currentUser };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required('Username is required'),
    Phone: Yup.string()
      .required('Phone is required')
      .matches(REGEX.PHONE_NUMBER, 'Phone number is not valid'),
    Address: Yup.string().required('Address is required').nullable(),
  });

  const handleSubmit = async (
    values: ProfileResponse,
    { setSubmitting }: FormikHelpers<ProfileResponse>,
  ) => {
    setSubmitting(true);
    try {
      await updateProfile(values as UpdateProfileRequest);
      dispatch(authActions.saveProfile(values));
      toast.success('Update profile success');
    } catch (error) {
      console.log('error :>> ', error);
      toast.error('Update profile failed');
    } finally {
      setSubmitting(false);
    }
  };

  const Information = (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => {
          return (
            <Form>
              <FormItem>
                <Title>Name: </Title>
                <Field name="Name" component={Input} placeholder="Username" />
              </FormItem>
              <FormItem>
                <Title>Phone: </Title>
                <Field name="Phone" component={Input} placeholder="Phone" />
              </FormItem>
              <FormItem>
                <Title>Email: </Title>
                <Field name="Email" readOnly component={Input} placeholder="Email" />
              </FormItem>
              <Space style={{ display: 'flex' }}>
                <Button
                  type="primary"
                  size="large"
                  disabled={!(isValid && dirty)}
                  loading={isSubmitting}
                  htmlType="submit"
                >
                  Edit Profile
                </Button>
              </Space>
            </Form>
          );
        }}
      </Formik>
    </>
  );

  return (
    <>
      <Row justify="center">
        <Divider orientation="left">Edit Profile</Divider>
        <Col span={4}>
          <Avatar src={currentUser.AvatarImage} />
        </Col>
        <Col offset={1} span={8}>
          {Information}
        </Col>
      </Row>
    </>
  );
};
