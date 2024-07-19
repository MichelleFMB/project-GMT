import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
    };

    fetchQuote();
    const intervalId = setInterval(fetchQuote, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ mt: 4, px: 2, textAlign: 'center', maxWidth: '80%' }}>
      <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#555' }}>
        {quote}
      </Typography>
    </Box>
  );
};

export default Quote;