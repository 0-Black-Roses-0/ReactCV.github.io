import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/Dashboard';
import Header from './components/master/header/header'
import Footer from './components/master/footer/footer';
import Signup from './components/login/signup'
import Home from './components/public/index'

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main style={{ minHeight: 'calc(100vh - 100px)' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
