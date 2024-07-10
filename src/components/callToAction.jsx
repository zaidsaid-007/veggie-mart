import React from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import '../styles/Action.css';

const CallToAction = () => {
    return (
        <section className="call-to-action" id="cta">
            <h2>Get Started with VeggieMart</h2>
            <div className="cta-buttons">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LaunchIcon />}
                    href="https://deployedapp.com"
                    className="btn"
                >
                    Visit App
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/zaidsaid007/veggiemart"
                    className="btn"
                >
                    View on GitHub
                </Button>
            </div>
        </section>
    );
};

export default CallToAction;
