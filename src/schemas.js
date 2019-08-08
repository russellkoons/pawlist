import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required')
});

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username too short!')
    .max(18, 'Username too long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password too short!')
    .max(72, 'Password too long!')
    .required('Required')
});