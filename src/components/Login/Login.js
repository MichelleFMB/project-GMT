import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailAction, loginWithGoogleAction } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from '../LoginPopUp/LoginSuccessPopup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setShowPopup(true);
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(loginWithEmailAction(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogleAction());
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleGoToTracking = () => {
    navigate('/tracking');
  };

  return (
    <div>
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/image_1.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        >
          <LoginSuccessPopup
            onClose={handleClosePopup}
            onGoToTracking={handleGoToTracking}
          />
        </div>
      )}
      <div style={{ zIndex: 0 }}>
        <h2>Login to your account.</h2>
        {error && <p>Firebase: {error}</p>}
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
    </div>
  );
};

export default Login;