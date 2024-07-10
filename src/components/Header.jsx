import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../styles/Header.css';

const Header = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <Typography variant="h6" className="logo">
                    <img src= '../assets/logo.png' alt="VeggieMart Logo" className="logo-img" />
                </Typography>
                <div className="nav-links">
                    <Button href="#home" color="inherit">Home</Button>
                    <Button href="#about" color="inherit">About</Button>
                    <Button href="#features" color="inherit">Features</Button>
                    <Button href="#contact" color="inherit">Contact</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
