import React from 'react';
import { Button, Typography, Box, Dialog, DialogContent, DialogActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/authAction';

const LoginSuccessPopup = ({ onClose, onGoToTracking }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    onClose();
  };

  return (
    <Dialog
      open
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          position: 'absolute',
          bottom: 0,
          mb: 0,
          borderTopLeftRadius: '100px',
          borderTopRightRadius: '100px',
        },
      }}
    >
      <DialogContent
        sx={{
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          textAlign: 'center',
        }}
      >
        <img src={`${process.env.PUBLIC_URL}/assets/login_success.png`} alt="Success" style={{ width: 250, height: 200, marginBottom: 35 }} />
        <Typography variant="h5" sx={{ mb: 5, fontSize: '2rem', fontWeight: 600 }}>
          Login Successful
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#FE8C00',
            borderRadius: '50px',
            mb: 6,
            '&:hover': { bgcolor: '#FE8C00' },
            width: 'auto',
            minWidth: '200px',
            fontSize: '1rem',
            textTransform: 'none',
          }}
          onClick={onGoToTracking}
        >
          Go To Tracking Screen
        </Button>
        <Typography
          variant="body2"
          sx={{ cursor: 'pointer', color: '#878787',fontSize: '1rem', '&:hover': { color: '#878787' } }}
          onClick={handleLogout}
        >
          Logout
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default LoginSuccessPopup;
