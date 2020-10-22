import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import LogoImg from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';
import { useAuth } from '../../context/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleFormSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Required email')
            .email('Enter a valid email'),
          password: Yup.string().required('Required password'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleFormSubmit}>
          <h1>Enter your credentials</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Login</Button>
          <a href="forgot">Forgot password?</a>
        </Form>
        <a href="signup">
          <FiLogIn />
          Create Account
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
