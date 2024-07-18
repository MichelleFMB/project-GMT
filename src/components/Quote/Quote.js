import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

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

  return <Typography sx={{ mt: 4 }}>{quote}</Typography>;
};

export default Quote;