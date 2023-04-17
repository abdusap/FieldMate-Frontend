import * as Yup from 'yup';

const turfLoginValidation=Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),

})

export default turfLoginValidation