import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerWithEmailAction, registerWithGoogleAction } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from '../LoginPopUp/LoginSuccessPopup';

const Register = () => {
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

  const handleRegister = () => {
    dispatch(registerWithEmailAction(email, password));
  };

  const handleGoogleRegister = () => {
    dispatch(registerWithGoogleAction());
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
    </div>
  );
};

export default Register;