'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function CTA() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#C9A14A',
        color: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, fontFamily: 'var(--font-playfair-display)' }}>
          Ready to Find Your Dream Home?
        </Typography>
        <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400 }}>
          Join the community of 2000+ happy families living in Gowardhan landmarks.
          Book your site visit today and experience luxury first-hand.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              px: 6,
              py: 2,
              backgroundColor: '#1A1A1A',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#333333' },
            }}
          >
            Book Site Visit
          </Button>
          <Button
            component={Link}
            href="/projects"
            variant="outlined"
            size="large"
            sx={{
              px: 6,
              py: 2,
              borderColor: '#FFFFFF',
              color: '#FFFFFF',
              '&:hover': { borderColor: '#1A1A1A', color: '#1A1A1A' },
            }}
          >
            View Projects
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
