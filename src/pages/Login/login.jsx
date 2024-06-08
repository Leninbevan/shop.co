import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import React from 'react';
import "../../styles/login.css";
import BackImage from "../../assests/backgroundImage/LoginBackGround.jpg";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../service/reduxKit';

const Login = () => {
  const dispatch = useDispatch();
  const handelLogin = () => {
    localStorage.setItem("authentication", JSON.stringify(true));
    dispatch(login(true));
  }

  return (
    <>
      <Box className="loginPage" sx={{ backgroundImage: "url(" + BackImage + ")" }}>
        <Box className="formContainer">
          <Box className='loginFormFieldContainer'>
            <form noValidate>
              <TextField
                // onChange={(event)=>handelAccount("username",event)}
                className='loginInputField'
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder="Username"
                name="username"
                autoFocus
                autoComplete='off'
                InputProps={{
                  style: {
                    borderRadius: "4px"
                  }
                }}
                sx={{ borderRadius: "4px" }}
              />
              <TextField
                // onChange={(event)=>handelAccount("password",event)}
                className='loginInputField'
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder='Password'
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  style: {
                    borderRadius: "4px",
                  }
                }}
                sx={{ borderRadius: "4px" }}
              />
              <FormControlLabel
                sx={{ color: "aliceblue" }}
                control={<Checkbox value="remember" color="primary" sx={{ color: "aliceblue" }} />}
                label="Remember me!"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ padding: "14px 14px" }}
                onClick={handelLogin}
              >
                Log in
              </Button>
              <Box container>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ color: "aliceblue", cursor: "pointer" }} >
                    Don't have an account? Sign Up
                  </Box>
                  <Box sx={{ color: "aliceblue", cursor: "pointer" }} >
                    Forgotten account?
                  </Box>
                </Box>
              </Box>
              <Box mt={5} sx={{ textAlign: "center", color: "aliceblue", cursor: "pointer" }}>
                Copyright © Your Website 2024.
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login