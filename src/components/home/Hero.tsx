'use client';

import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000") no-repeat center center/cover',
        textAlign: 'center',
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 6,
              fontWeight: 600,
              color: '#C9A14A',
              mb: 2,
              display: 'block',
              fontSize: '1.2rem',
            }}
          >
            WELCOME TO EXCELLENCE
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              mb: 4,
              letterSpacing: 2,
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            Building Dreams <br />
            <span style={{ color: '#C9A14A' }}>Creating Landmarks</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 6,
              fontWeight: 400,
              maxWidth: 700,
              mx: 'auto',
              color: 'rgba(255,255,255,0.8)',
              letterSpacing: 1,
            }}
          >
            Redefining the landscape of luxury living in Pune with architectural brilliance and uncompromising quality.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
          >
            <Button
              component={Link}
              href="/projects"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                backgroundColor: '#C9A14A',
                '&:hover': { backgroundColor: '#A68239' },
              }}
            >
              Explore Projects
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                '&:hover': { borderColor: '#C9A14A', color: '#C9A14A' },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 2, height: 60, backgroundColor: 'rgba(201, 161, 74, 0.5)', margin: '0 auto' }}
        />
      </Box>
    </Box>
  );
}
