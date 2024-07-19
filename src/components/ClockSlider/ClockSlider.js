import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

const ClockSlider = ({ speed, onSpeedChange }) => {
  return (
    <Box sx={{ width: 300, mt: 2, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 1 }}>Slider Clock</Typography>
      <Slider
        value={speed}
        min={0.1}
        max={5}
        step={0.1}
        onChange={onSpeedChange}
        valueLabelDisplay="auto"
        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: '#FE8C00',
            width: 20,
            height: 20,
            border: 'none',
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
          '& .MuiSlider-track': {
            backgroundColor: '#FE8C00',
            border: 'none',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#e0e0e0',
          },
          '& .MuiSlider-valueLabel': {
            backgroundColor: '#FE8C00',
            color: 'white',
            borderRadius: '4px',
          },
        }}
      />
    </Box>
  );
};

export default ClockSlider;