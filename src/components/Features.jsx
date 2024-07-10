import React from 'react';
import '../styles/Features.css';
import CallToAction from './callToAction';

const Features = () => {
    return (
        <section id="features" className="features">
            <h2>Our Features</h2>
            <div className="feature-list">
                <div className="feature">
                    <h3>Fresh Produce</h3>
                    <p>Guaranteed fresh vegetables delivered to your doorstep.</p>
                </div>
                <div className="feature">
                    <h3>Support Farmers</h3>
                    <p>Helping local farmers reach more customers and grow their business.</p>
                </div>
                <div className="feature">
                    <h3>Easy Ordering</h3>
                    <p>Order your vegetables anytime, anywhere with just a click.</p>
                </div>
            </div>
            <CallToAction />
        </section>
    );
};

export default Features;
