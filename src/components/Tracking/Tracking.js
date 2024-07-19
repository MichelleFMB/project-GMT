import React, { useState, useEffect } from 'react';
import AnalogClock from '../Clock/AnalogClock';
import ShareButton from '../SharedButton/ShareButton';
import ClockSlider from '../ClockSlider/ClockSlider';
import Quote from '../Quote/Quote';
import { Box, Typography } from '@mui/material';

const Tracking = () => {
  const getInitialSpeed = () => {
    const params = new URLSearchParams(window.location.search);
    const speedParam = params.get('speed');
    return speedParam ? parseFloat(speedParam) : 1;
  };

  const [speed, setSpeed] = useState(getInitialSpeed);

  const handleSliderChange = (event, newValue) => {
    setSpeed(newValue);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('speed')) {
      setSpeed(parseFloat(params.get('speed')));
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4 }}>
      <AnalogClock speed={speed} />
      <ClockSlider speed={speed} onSpeedChange={handleSliderChange} />
      <ShareButton speed={speed} />
      <Quote />
    </Box>
  );
};

export default Tracking;