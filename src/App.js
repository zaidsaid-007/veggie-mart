import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Features />
            <Footer />
        </div>
    );
};

export default App;

