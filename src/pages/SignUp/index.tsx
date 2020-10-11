import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import LogoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Required name'),
        email: Yup.string()
          .required('Required email')
          .email('Enter a valid email'),
        password: Yup.string().min(
          10,
          'Password must be at least 10 characters long',
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />

      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h1>Create your account</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
        <a href="signup">
          <FiArrowLeft />
          Return to Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
