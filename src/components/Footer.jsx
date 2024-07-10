import React from 'react';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <p>&copy; 2024 VeggieMart. All rights reserved.</p>
            <div className="contact-icons">
                <IconButton href="mailto:zaidsaid007@gmail.com" color="inherit">
                    <EmailIcon />
                </IconButton>
                <IconButton href="https://linkedin.com/in/yourprofile" target="_blank" color="inherit">
                    <LinkedInIcon />
                </IconButton>
            </div>
        </footer>
    );
};

export default Footer;
