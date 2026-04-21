'use client';

import React from 'react';
import { Box, Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

export default function FloatingActions() {
  const whatsappNumber = '+919876543210'; 
  const phoneNumber = '+912012345678';

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Zoom in timeout={500} style={{ transitionDelay: '500ms' }}>
        <Tooltip title="Call Now" placement="left">
          <Fab
            color="primary"
            aria-label="call"
            href={`tel:${phoneNumber}`}
            sx={{
              backgroundColor: '#1A1A1A',
              color: '#C9A14A',
              '&:hover': {
                backgroundColor: '#333333',
              },
            }}
          >
            <PhoneIcon />
          </Fab>
        </Tooltip>
      </Zoom>

      <Zoom in timeout={500} style={{ transitionDelay: '700ms' }}>
        <Tooltip title="Chat on WhatsApp" placement="left">
          <Fab
            color="success"
            aria-label="whatsapp"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            sx={{
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          >
            <WhatsAppIcon />
          </Fab>
        </Tooltip>
      </Zoom>
    </Box>
  );
}
