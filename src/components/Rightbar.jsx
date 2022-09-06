import { Box } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
        }}
      >
        Rightbar
      </Box>
    </Box>
  );
};

export default Rightbar;
