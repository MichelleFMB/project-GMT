import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerWithEmailAction, registerWithGoogleAction } from '../../redux/actions/authAction';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  
  const handleRegister = () => {
    dispatch(registerWithEmailAction(email, password));
  };

  const handleGoogleRegister = () => {
    dispatch(registerWithGoogleAction());
  };
  

  return (
    <div>
      <h2>Create your new account.</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleGoogleRegister}>Register with Google</button>
      <p>Already have an account? <a href="/login">Sign In</a></p>
    </div>
  );
};

export default Register;