import React from 'react';
import '../styles/Main.css';

const Main = () => {
    return (
        <main className="main">
            <section id="home">
                <h1>Welcome to VeggieMart</h1>
                <p>Your one-stop shop for fresh, organic vegetables.</p>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <p>VeggieMart connects farmers with consumers to provide fresh produce with the click of a button.</p>
            </section>
        </main>
    );
};

export default Main;
