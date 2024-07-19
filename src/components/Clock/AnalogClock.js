import React, { useState, useEffect, useRef } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { Box } from '@mui/material';

const AnalogClock = ({ speed }) => {
  const [time, setTime] = useState(new Date(new Date().getTime() - 7200000));
  const intervalRef = useRef();

  useEffect(() => {
    const updateClock = () => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000 * speed));
    };

    intervalRef.current = setInterval(updateClock, 1000);
    return () => clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '60vh', 
    }}>
      <Box sx={{ 
        width: '300px', 
        height: '300px', 
        backgroundColor: 'white', 
        borderRadius: '50%', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Clock
          value={time}
          renderNumbers={true}
          hourHandWidth={5}
          minuteHandWidth={3}
          secondHandWidth={1}
          hourHandLength={50}
          minuteHandLength={70}
          secondHandLength={80}
          size={250}
        />
      </Box>
    </Box>
  );
};

export default AnalogClock;
