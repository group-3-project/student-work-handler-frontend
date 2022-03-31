import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";

//css import
import "./Login.css";

//material import
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

//otp
import OTPInput, { ResendOTP } from "otp-input-react";

//react-Router
import { useNavigate ,useLocation} from "react-router-dom";

//https
import Client from "../api/client";


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

export default function OTP() {

  let navigate=useNavigate();

  const {state} = useLocation();
   const [OTP, setOTP] = useState("");

  const handleSubmit = async() => {
    const {ID}=state;

   const values={
     "Id":ID,
     "otp":OTP
   }
   try {
    const { data } = await Client.post("/verify-email", {
      ...values,
    });
    console.log(data);
    navigate("/");
  
  } catch (error) {
    if(error.response)
    {
      console.log(error.response.data.message);
    }
  }  

  };
  return (
    <>
      <div className="main">
        <div className="parent_div">
          <div className="child_div">
            <center>
              <h1 className="heading"> Student HAndler </h1>
             <div  style={{ marginTop:'10%'}}>
             <h4>OTP Verifcation</h4>
                <br></br>
                <OTPInput
                    className="otp"
                  value={OTP}
                  onChange={setOTP}
                  autoFocus
                  OTPLength={4}
                  otpType="number"
                  disabled={false}
                  secure
                />
              
              <br></br>
              <LoginB variant="contained" onClick={handleSubmit}>
                Submit
              </LoginB>
             </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
