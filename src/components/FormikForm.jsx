import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { TextField, Button } from '@mui/material'

const initialValues = {
    email: '',
    name: '',
    password: ''
}

const FormikForm = () => {
    return (
        <div className='form-div'>
            <Formik 
                initialValues={initialValues}
                onSubmit={(values, formikHelpers) => {
                    console.log(values)
                    formikHelpers.resetForm()
                }}
                validationSchema={object({
                    email: string().required('Enter email').email('Invalid email'),
                    name: string().required('Enter name').min(2, 'Name too short'),
                    password: string().required('Enter password').min(8, 'Password should be min. 8 characters')
                })}
            >
                {({errors, isValid, touched, dirty}) => (
                    <Form>
                        <h1>Form</h1>
                        <Field 
                            name='email' 
                            type='email' 
                            as={TextField}
                            color="primary"
                            autoComplete="off"
                            label="Email"
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={<ErrorMessage name="email" />}
                        />
                        <Field 
                            name='name' 
                            type='name' 
                            as={TextField}
                            color="primary"
                            autoComplete="off"
                            label="Name"
                            error={Boolean(errors.name) && Boolean(touched.name)}
                            helperText={<ErrorMessage name="name" />}
                        />
                        <Field 
                            name='password' 
                            type='password' 
                            as={TextField}
                            color="primary"
                            autoComplete="off"
                            label="Password"
                            error={Boolean(errors.password) && Boolean(touched.password)}
                            helperText={<ErrorMessage name="password" />}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            size='large'
                            disabled={!dirty || !isValid}
                        >
                            Sign Up
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikForm;