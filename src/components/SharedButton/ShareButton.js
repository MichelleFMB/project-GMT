import React from 'react';
import { Button } from '@mui/material';

const ShareButton = ({ speed }) => {
  const handleShareButtonClick = async () => {
    const currentUrl = window.location.href.split('?')[0];
    const sharedUrl = `${currentUrl}?speed=${speed}`;

    try {
      await navigator.clipboard.writeText(sharedUrl);
      alert(`URL copied to clipboard: ${sharedUrl}`);
    } catch (err) {
      alert('Failed to copy the URL. Please try again.');
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleShareButtonClick}
      sx={{
        backgroundColor: '#FE8C00',
        '&:hover': {
          backgroundColor: '#d47400',
        },
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1.2rem',
      }}
    >
      Share
    </Button>
  );
};

export default ShareButton;