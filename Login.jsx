// src/components/Login.js

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { gsap } from 'gsap';


const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const backgroundRef = useRef(null);
    const formRef = useRef(null);
    const errorRef = useRef(null);

    useEffect(() => {
        if (localStorage.getItem('authenticated') === 'true') {
            navigate('/');
        }

        // GSAP animation for background
        gsap.fromTo(backgroundRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 2, ease: "power2.out" }
        );

        // GSAP animation for the form
        gsap.fromTo(formRef.current, 
            { y: -50, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleLogin = () => {
        if (credentials.username === 'admin' && credentials.password === 'team8') {
            localStorage.setItem('authenticated', 'true');
            navigate('/');
        } else {
            setError('Invalid username or password');

            // GSAP animation for error message
            gsap.fromTo(errorRef.current, 
                { y: -20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
        }
    };

    return (
        <div ref={backgroundRef} style={{
            backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Container maxWidth="sm">
                <Paper ref={formRef} sx={{ padding: 4, marginTop: 8, borderRadius: '10px', boxShadow: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        label="Username"
                        variant="outlined"
                        name="username"
                        fullWidth
                        value={credentials.username}
                        onChange={handleInputChange}
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        fullWidth
                        value={credentials.password}
                        onChange={handleInputChange}
                        sx={{ marginBottom: 2 }}
                    />
                    {error && 
                        <Typography ref={errorRef} color="error" variant="body2" sx={{ marginBottom: 2 }}>
                            {error}
                        </Typography>
                    }
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        onClick={handleLogin}
                        sx={{ borderRadius: '5px' }}
                    >
                        Login
                    </Button>
                </Paper>
            </Container>
        </div>
    );
};

export default Login;


