import React from 'react';
import './Home.css';
import { Box, Typography, MobileStepper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const tutorialSteps = [
  {
    label: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can’t wait for your order!!',
    imgPath: 'assets/image_1.jpg',
  },
  {
    label: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can’t wait for your order!!',
    imgPath: 'assets/image_2.jpg',
  },
  {
    label: 'We serve incomparable delicacies',
    description: 'All the best restaurants with their top menu waiting for you, they can’t wait for your order!!',
    imgPath: 'assets/image_3.jpg',
    buttonImg: 'assets/button_next.png'
  }
];

function Home() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    } else {
      navigate('/login');
    }
  };

  const handleSkip = () => {
    navigate('/login');
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundImage: `url(${process.env.PUBLIC_URL}/${tutorialSteps[activeStep].imgPath})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Box sx={{
        width: 'auto',
        height: '450px',
        margin: '10px',
        maxWidth: '600px',
        bgcolor: '#FE8C00',
        borderRadius: '16px',
        p: 4,
        boxShadow: 3,
        textAlign: 'center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ width: '80%', mt: 6 }}>
          <Typography variant="h4" sx={{ mb: 4, fontSize: '2rem', fontWeight: 600 }}>{tutorialSteps[activeStep].label}</Typography>
          <Typography variant="h6" sx={{ fontSize: '1.3rem' }}>{tutorialSteps[activeStep].description}</Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {activeStep === maxSteps - 1 ? (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  backgroundImage: `url(${process.env.PUBLIC_URL}/${tutorialSteps[activeStep].buttonImg})`,
                  backgroundSize: 'contain',
                  cursor: 'pointer'
                }}
                onClick={() => navigate('/login')}
              />
            </Box>
          ) : (
            <>
              <Typography sx={{ cursor: 'pointer', color: 'white', fontWeight: 600, fontSize: '1.3rem' }} onClick={handleSkip}>Skip</Typography>
              <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                  flexGrow: 1,
                  justifyContent: 'center',
                  bgcolor: 'transparent',
                  '.MuiMobileStepper-dot': {
                    backgroundColor: '#c0c0c0',
                    width: '16px',
                    height: '8px',
                    borderRadius: '4px',
                    margin: '0 4px'
                  },
                  '.MuiMobileStepper-dotActive': {
                    backgroundColor: '#ffffff',
                    width: '16px',
                    height: '8px',
                    borderRadius: '4px',
                    margin: '0 4px'
                  }
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleNext}>
                <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1.3rem', mr: 1 }}>Next</Typography>
                <span className="material-symbols-rounded" style={{ fontSize: '2rem', color: 'white' }}>east</span>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Home;