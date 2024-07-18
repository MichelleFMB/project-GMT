import React from 'react';
import { Box, Button, Typography, MobileStepper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const tutorialSteps = [
  {
    label: 'We serve incomparable delicacies',
    imgPath: 'path_to_your_image1.jpg',
  },
  {
    label: 'All the best restaurants with their top menu waiting for you, they can\'t wait for your order!',
    imgPath: 'path_to_your_image2.jpg',
  },
  {
    label: 'Join us and explore great food around you',
    imgPath: 'path_to_your_image3.jpg',
  }
];

function CustomButton({ onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'center', 
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'white',
          boxShadow: '0 0 0 6px orange',
          cursor: 'pointer'
        }}
      >
        <ArrowForwardIosIcon sx={{ color: 'orange', fontSize: 30 }} />
      </Box>
    </Box>
  );
}

function Home() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, mx: 'auto' }}>
      <SwipeableViews
        axis={'x'}
        index={activeStep}
        onChangeIndex={(step) => setActiveStep(step)}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <Box key={step.label} sx={{ p: 2, textAlign: 'center', height: 255 }}>
            <Typography variant="h6" gutterBottom>
              {step.label}
            </Typography>
            <img src={step.imgPath} alt={step.label} style={{ width: '100%', height: 'auto' }} />
            {index === maxSteps - 1 && (
              <CustomButton onClick={handleNext} />
            )}
          </Box>
        ))}
      </SwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <Button size="small" onClick={handleSkip}>
            Skip
          </Button>
        }
        nextButton={
          activeStep < maxSteps - 1 && (
            <Button size="small" onClick={handleNext}>
              Next
            </Button>
          )
        }
        sx={{
          justifyContent: 'space-between',
          px: 1,
          bgcolor: 'background.paper'
        }}
      />
    </Box>
  );
}

export default Home;