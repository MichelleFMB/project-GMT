import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerWithEmailAction, registerWithGoogleAction } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
import LoginSuccessPopup from '../LoginPopUp/LoginSuccessPopup';
import { Box, Button, TextField, Typography, Container, FormControlLabel, Checkbox, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formError, setFormError] = useState('');
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
    if (!email || !userName || !password) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (!agree) {
      setFormError('You must agree to the terms and conditions.');
      return;
    }
    dispatch(registerWithEmailAction(email, userName, password, agree));
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          Create your new account.
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, fontSize: '0.875rem' }}>
          Create an account to start looking for the food you like
        </Typography>
        {formError && <Typography color="error">{formError}</Typography>}
        {error && <Typography color="error">Firebase: {error}</Typography>}
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
          type="text"
          label="User Name"
          placeholder="Enter User Name"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          sx={{ mb: 2, fontSize: '0.875rem' }}
        />
        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="Password"
          placeholder="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2, fontSize: '0.875rem' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              name="agree"
              color="primary"
            />
          }
          label={
            <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
              I Agree with <a href="/terms" style={{ textDecoration: 'none', color: '#FE8C00', fontWeight: 600 }}>Terms of Service</a> and <a href="/privacy" style={{ textDecoration: 'none', color: '#FE8C00', fontWeight: 600 }}>Privacy Policy</a>
            </Typography>
          }
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={handleRegister}
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
          Register
        </Button>
        <Typography variant="body2" sx={{ mt: 3,mb: 2, fontSize: '0.875rem' }}>
          Or sign in with
        </Typography>
        <div
          onClick={handleGoogleRegister}
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
          Already have an account? <a href="/login" style={{ textTransform: 'none', textDecoration: 'none', color: '#FE8C00', fontWeight: 600 }}>Sign In</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;