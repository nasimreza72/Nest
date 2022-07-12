import React, { useContext, useEffect } from 'react'
import "./InputRegister.scss"
import { useFormik, Formik, Form } from "formik"
import { loginContext } from '../../Context/LoginContext.jsx'
import * as Yup from "yup"
import FormikControl from "./HostOrUser/FormikControl.jsx";



function InputRegister() {

    const { email, setEmail, password, setPassword,register, setRegister, registerFunction } = useContext(loginContext)
    console.log("email" ,email, "password", password)

   
    const initialValues = {
    email:"",
    password:"",
    selectOption:""
    }

    const onChange = values => {
        console.log(formik.values)
    }

    const onSubmit = values => {
        console.log("Im here in Submit Handler")
        console.log("onSubmit",values.email)
        console.log("onSubmit",values.password)
        setEmail(values.email)
        setPassword(values.password)
       
        setRegister(false)
    }

    console.log("after submit ",email, password, )
    const validationSchema = Yup.object({
    
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        selectOption: Yup.string()
            .required('Required')

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        onChange,
        validationSchema
    })

   
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
               
                <div className="formControl">
                    <label htmlFor="email"></label>
                    <input 
                        className="topInput"
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                    />
                    { formik.touched.email && formik.errors.email ? <div className="error"> {formik.errors.email} </div> : null}
                </div>

                <div className="formControl">
                    <label htmlFor="password"></label>
                    <input
                        className="bottomInput" 
                        type="password" 
                        id="password" 
                        name="password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        value={formik.values.password} 
                    />
                    { formik.touched.password && formik.errors.password ? <div className="error"> {formik.errors.password} </div> : null}
                </div>

                <div className="privacyPolicy">
                <p> We`ll call or text you to confirm your number. 
                    Standard message and data rates apply. 
                    <a href=""> Privacy Policy</a> 
                </p>
            </div>
            <button className="ContinueButton" type="submit">Continue</button>
            <div className="lineAndOrContainer">           
                <div className="leftLine"></div> 
                <div className="or">or</div> 
                <div className="rightLine"></div>
            </div>
            
            </form>
        </div>
    )

}

export default InputRegister