import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import SighnUp from './components/login/signup';
import Dashboard from './components/Dashboard';
import Header from './components/master/header/header'
import Footer from './components/master/footer/footer';
import Signup from './components/login/signup'
import Home from './components/public/index'
import Profile from './components/public/profile';
import Notfound from './components/public/404Notfound';
import ContactUs from './components/public/contacus';

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
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/notfound' element={<Notfound />} />
                        <Route path='/contactus' element={<ContactUs />} />
                        <Route path='/signup' element={<SighnUp />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
