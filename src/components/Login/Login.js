import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailAction, loginWithGoogleAction } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from '../LoginPopUp/LoginSuccessPopup';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

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
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(loginWithEmailAction(email, password));
  };

  const handleGoogleLogin = async () => {
    try {
      await dispatch(loginWithGoogleAction());
    } catch (error) {
      console.error("Google login error: ", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleGoToTracking = () => {
    navigate('/tracking');
  };

  return (
    <Container maxWidth="sm">
      {showPopup && (
        <Box
          sx={{
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
        </Box>
      )}
      <Box sx={{ zIndex: 0, textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontSize: '2rem', fontWeight: 600 }}>
          Login to your account.
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, fontSize: '0.875rem' }}>
          Please sign in to your account
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          fullWidth
          type="email"
          label="Email Address"
          placeholder="Enter Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2, fontSize: '0.875rem' }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          placeholder="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2, fontSize: '0.875rem' }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            mb: 4,
            textTransform: 'none',
            fontSize: '1rem',
            backgroundColor: '#FF9800',
            '&:hover': { backgroundColor: '#E68900' },
            borderRadius: '20px',
            maxWidth: '300px',
            margin: '0 auto'
          }}
        >
          Sign In
        </Button>
        <Typography variant="body2" sx={{ mt: 3,mb: 3, fontSize: '0.875rem' }}>
          Or sign in with
        </Typography>
        <div
          onClick={handleGoogleLogin}
          style={{
            borderColor: '#FF9800',
            color: '#FF9800',
            border: 'none',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            cursor: 'pointer',
            marginBottom: '1rem',
            maxWidth: '300px',
            margin: '0 auto',
            '&:hover': {
              borderColor: '#E68900',
              color: '#E68900'
            },
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/google_icon.png`}
            alt="Google Icon"
            style={{ display: 'flex', justifyContent: 'center'}}
          />
        </div>
        <Typography variant="body2" style={{ fontSize: '1rem' }}>
          Don't have an account? <a href="/register" style={{ textTransform: 'none', textDecoration: 'none', color: '#FE8C00', fontWeight: 600 }}>Register</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;