import React, { useState, useContext } from 'react';
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControl from './FormikControl.jsx';
import "./NewRegister.scss"
import { useNavigate } from 'react-router-dom'
import { loginContext } from "../../../Context/LoginContext.jsx"



function FormikContainer() {
        
        const navigate = useNavigate()
        const { setEmail, setPassword, email, password, setRegister, hostOrUser, setHostOrUser, registerFunction } = useContext(loginContext)
        const dropdownOptions = [
            { key:'User or Host?', value:'' },
            { key:'User', value:'user' },
            { key:'Host', value:'host' },
            
        ]

        const initialValues = {
            email: '',
            password: '',
            selectOption:''
        }
        const validationSchema = Yup.object({
            email: Yup.string()
                   .required('Required')
                   .email('Invalid email format'),
            password: Yup.string().required('Required'),
            selectOption: Yup.string().required('Required')
        })
        const onSubmit = values => {
                                    setEmail(values.email)
                                    setPassword(values.password)
                                    setHostOrUser(values.selectOption)
                                    setRegister(false)
                                    console.log("this is values..........",values)
                                    registerFunction(values)
                                   }



    return ( 
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => 
                <Form>
                    <FormikControl
                        control='select'
                        name='selectOption'
                        options={dropdownOptions}
                    /> 
                    <FormikControl 
                        control='input' 
                        type='email' 
                        name='email'
                        placeholder='E-Mail'
                    />
                    <FormikControl 
                        type='password'
                        control='input' 
                        name='password' 
                        placeholder='password'
                    />
                    <button className="ContinueButton" type="submit">Continue</button>
                    <div className="lineAndOrContainer">           
                        <div className="leftLine"></div> 
                        <div className="or">or</div> 
                        <div className="rightLine"></div>
                    </div>
                </Form>
            }
            
        </Formik>
     );
}

export default FormikContainer ;