import React, { useState } from 'react';
import AnalogClock from '../Clock/AnalogClock';
import Quote from '../Quote/Quote';
import { Slider, Box, Button, Typography } from '@mui/material';

const Tracking = () => {
  const [speed, setSpeed] = useState(1);

  const handleSliderChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleShareButtonClick = () => {
    const currentUrl = window.location.href;
    const sharedUrl = `${currentUrl}?speed=${speed}`;
    navigator.clipboard.writeText(sharedUrl);
    alert(`URL copied to clipboard: ${sharedUrl}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4 }}>
      <AnalogClock speed={speed} />
      <Box sx={{ width: 300, mt: 2 }}>
        <Typography>Adjust Clock Speed</Typography>
        <Slider
          value={speed}
          min={0.1}
          max={5}
          step={0.1}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
        />
      </Box>
      <Button variant="contained" onClick={handleShareButtonClick}>
        Share
      </Button>
      <Quote />
    </Box>
  );
};

export default Tracking;