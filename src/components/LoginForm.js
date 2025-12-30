import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === 'password') {
      navigate('/welcome');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>🔐 Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email"
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Sign In →</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '20px', color: '#94a3b8', fontSize: '0.9em' }}>
        Demo: test@example.com / password
      </p>
    </div>
  );
};

export default LoginForm;
