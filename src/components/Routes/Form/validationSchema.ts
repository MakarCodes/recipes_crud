import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(3, 'Minimum 3 letters')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  ingredients: yup
    .string()
    .required('This field is required')
    .matches(
      /^[a-zA-Z\, ]{2,}$/,
      'Only alphabets, commas and spaces are allowed for this field '
    ),
});
