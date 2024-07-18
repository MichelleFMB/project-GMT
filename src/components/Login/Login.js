import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailAction, loginWithGoogleAction } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleLogin = () => {
    dispatch(loginWithEmailAction(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogleAction());
  };

  return (
    <div>
      <h2>Login to your account.</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={handleGoogleLogin}>Sign In with Google</button>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;