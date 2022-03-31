import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from '@mui/material/Stack';




const ColorButton = styled(Button)({
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

function CJbutton(props) {
  return (
    <>
          <Stack spacing={2} direction="column" >
      <ColorButton variant="contained">{props.btname}</ColorButton>
    </Stack>
    </>
  );
}

export default CJbutton;
