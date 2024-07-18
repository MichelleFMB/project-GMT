import React, { useState, useEffect, useRef } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { Box } from '@mui/material';

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    const updateClock = () => {
      setTime((prevTime) => new Date(prevTime.getTime() - 1000));
    };

    intervalRef.current = setInterval(updateClock, 1000 / speed);
    return () => clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <Box>
      <Clock value={time} />
    </Box>
  );
};

export default AnalogClock;