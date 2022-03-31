import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

//https
import Client from "../api/client";

//css import
import "./Login.css";

//material import
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

//routing
import { useNavigate } from "react-router-dom";

//material
const LoginB = styled(Button)({
  background: "rgb(238,174,202)",
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function Login() {
  //nagtive
  let navigate = useNavigate();

  //form validation
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await Client.post("/signin", {
          ...values,
        });
        console.log(data);
        formik.resetForm();
      } catch (error) {
        if(error.response)
        {
          console.log(error.response.data.message);
          formik.resetForm();

        }     
       }
    },
  });
  return (
    <>
      <div className="main">
        <div className="parent_div">
          <div className="child_div">
            <div className="subchid">
              <center>
                {" "}
                <h1 className="heading">Student HAndler</h1>
              </center>
            </div>
            <h4>Login</h4>
            <div className="vl"></div>
            <div>
              <Stack className="Lform">
                <form onSubmit={formik.handleSubmit} className="Lform">
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
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <br></br>
                  <br></br>
                  <Stack direction="row" spacing={25}>
                    <LoginB variant="contained" type="submit">
                      Submit
                    </LoginB>

                    <h6
                      onClick={() => {
                        navigate("forgotpassword");
                      }}
                    >
                      Forgot-Password?
                    </h6>
                  </Stack>
                </form>
                <br></br>
                <h6
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                  Do not have account Sign-IN
                </h6>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
