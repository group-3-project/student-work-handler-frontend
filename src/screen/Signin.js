import React from "react";
import * as yup from "yup";
import { useFormik,  } from 'formik';

//css import
import "./Login.css";

//material import
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";


//routing 
import { useNavigate } from "react-router-dom";

//https
import Client from "../api/client";

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

export default function SignIn() {
  let navigate=useNavigate();


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    name:yup.string("Enter your name").required("Name is required"),
});

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:  async(values) => {
      try {
        const { data } = await Client.post("/signup", {
          ...values,
        });
        console.log(data);
         let id=data.user.userid;
        navigate("/OTP", { state: { ID: id } })
        
        
        formik.resetForm();
      } catch (error) {
        if(error.response)
        {
          console.log(error.response.data.message);
        }
      }
  
 
     },
  });



  return (
    <> 
      <div className="main">
        <div className="parent_div">
          <div className="child_div">
              <center>
                <h1 className='heading'>Student HAndler</h1>
              </center>
            <h4>Sigin</h4>
            <div>
            <Stack >
      <form onSubmit={formik.handleSubmit}  >

      <TextField
          fullWidth
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <br></br>
        <br></br>
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
        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br></br>
        <br></br>

        < LoginB  variant="contained" type="submit">
          Signin
        </LoginB>
    
      </form>
      <h6 onClick={()=>{
          navigate("/")
        }}>Account already have Login</h6>
      </Stack>
    </div>

          </div>
        </div>
      </div>
    </>
  );
}
