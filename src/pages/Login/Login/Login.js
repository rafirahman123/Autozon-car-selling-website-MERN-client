import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.jpg';

const Login = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography sx={{ fontWeight: 600 }} variant="h6" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit} style={{ margin: '20px' }}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            variant="standard" />
                        <br />

                        <Button sx={{ width: '75%', m: 2, backgroundColor: '#15d2c7' }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User?  Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress color="success" />}
                        {user?.email && <Alert severity="success">User Login Succesfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------------------------</p>
                    <Button style={{ margin: '20px' }} onClick={handleGoogleSignin} variant="contained">Google Singin</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', margin: '20px', borderRadius: '10px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;