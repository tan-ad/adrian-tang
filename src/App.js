import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

const App = () => {
    return (
        <Router basename="/adrian-tang">
            <div className="app">
                <Header />
                <div className="content-wrapper">
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
