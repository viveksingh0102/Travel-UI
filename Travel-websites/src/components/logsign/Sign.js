import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './sign.css';
// ... (your imports and other code)

const Sign = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [action, setAction] = useState('Sign Up');

    useEffect(() => {
        if (action === 'Login') {
            // Clear the fields when switching to the login section
            setName('');
            setEmail('');
            setPassword('');
        }
    }, [action]);

    const handleLogin = () => {
        axios.post('http://localhost:8080/login', { email, password })
            .then(response => {
                console.log(response.data);
                navigate('/landing');
            })
            .catch(error => {
                console.error('Login failed:', error);
                alert('Incorrect email or password. Please enter the correct email and password.');
            });
    };

    const handleSignup = () => {
        axios.post('http://localhost:8080/post', { name, email, password })
            .then(response => {
                console.log(response.data);
                alert("Account created");
                setAction('Login'); // Automatically switch to the login section
            })
            .catch(error => {
                console.error('Signup failed:', error);
                alert('Signup failed. Please try again.');
            });
    };

    const handleButtonClick = () => {
        if (action === 'Sign Up') {
            // Check for empty name, email, or password
            if (!name || !email || !password) {
                alert('Please enter all fields.');
                return;
            }
            handleSignup();
        } else {
            // Check for empty email or password
            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }
            handleLogin();
        }
    };

    return (
        <>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === 'Login' ? null : (
                        <div className='input'>
                            <img src='' alt='' />
                            <input
                                type='text'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    <div className='input'>
                        <img src='' alt='' />
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='input'>
                        <img src=' ' alt='' />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='submit-container'>
                    <div
                        className={`submit ${action === 'Login' ? 'red' : 'gray'}`}
                        onClick={handleButtonClick}
                    >
                        {action === 'Login' ? 'Login' : 'Sign Up'}
                    </div>
                    <div
                        className='submit'
                        onClick={() => setAction(action === 'Login' ? 'Sign Up' : 'Login')}
                    >
                        {action === 'Login' ? 'Sign Up' : 'Login'}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sign;
