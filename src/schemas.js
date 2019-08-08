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

export const EventSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  date: Yup.string().required('Required'),
  pets: Yup.array(),
  info: Yup.object().shape({
    location: Yup.string(),
    description: Yup.string()
  }),
  frequency: Yup.string()
});

export const PetSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  info: Yup.object().shape({
    birthday: Yup.string(),
    breed: Yup.string(),
    color: Yup.string(),
    weight: Yup.string()
  }),
  vet: Yup.object().shape({
    vetName: Yup.string(),
    phone: Yup.string(),
    shots: Yup.object(),
    visits: Yup.array()
  }),
  pic: Yup.string()
});