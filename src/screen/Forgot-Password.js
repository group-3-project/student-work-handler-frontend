
import React from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from 'formik';

//css import
import "./Login.css";


//https 
import Client from "../api/client";

//material import
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";


//material  
const LoginB= styled(Button)({
  background: "rgb(238,174,202)",
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function Forgotpassword() {
 
const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
 
});

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      try {
      const { data } = await Client.post("/forgot-password", {
        ...values,
      });
      console.log(data);
      formik.resetForm();
    } catch (error) {
      if(error.response)
      {
        console.log(error.response.data.message);
      }     
     }},
  });


  return (
    <>
      <div className="main">
        <div className="parent_div">
          <div className="child_div">
        
              <center>
                <h1 className='heading'>Student HAndler</h1>
              </center>
           <br></br>
            <h4>Forgot-Password</h4>
            <br></br>
            <div>
            <Stack>
      <form onSubmit={formik.handleSubmit} >
      <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br></br>
        <br></br>
        
        < LoginB  variant="contained" type="submit">
          Reset
        </LoginB>    
      </form>
      <br></br>
      </Stack>
    </div>

          </div>
        </div>
      </div>
    </>
  );
}
