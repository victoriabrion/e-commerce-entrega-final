import { object, string, ref } from 'yup'

export const registerSchema = object ().shape({
    confirmPassword: string().required('Confirm required').oneOf([ref('password')],'Password does not match'),
    password: string().required('Password is required').min(8,'8 characters minimum'),
    email:  string().required('Email is required').email('Invalid email')
})

export const loginSchema = object ().shape({
    password: string().required('Password is required').min(8,'8 characters minimum'),
    email:  string().required('Email is required').email('Invalid email')
})