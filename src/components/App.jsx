import React from 'react';
import Header from './Header';
import Main from './Main';
import Features from './Features';
import CallToAction from './CallToAction';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Features />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default App;
