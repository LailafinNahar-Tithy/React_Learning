import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function FirstPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (email === 'tt@gmail.com') {
            navigate('/Home');
        } else {
            alert('Email Wrong');
        }
    };

    useEffect (()=>{
      
    })

    return (
        <div>
            <Navbar One="Home" Two="SignIn" Three="VIP" />

            <a href="/Home">
                <button>Go</button>
            </a>
            <button onClick={() => navigate('/Home')}>Demo</button>

            <form onSubmit={handleLoginFormSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input
                        type="email"
                        id="form3Example2"
                        className="form-control"
                        placeholder="dd"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example2">Email address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input
                        type="password"
                        id="form2Example3"
                        className="form-control"
                        placeholder="xx"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form2Example3">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input type="checkbox" id="form2Example4" className="form-check-input" />
                            <label className="form-check-label" htmlFor="form2Example4">Remember me</label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>

                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block">Sign In</button>
            </form>
        </div>
    );
}
