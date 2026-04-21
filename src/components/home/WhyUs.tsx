'use client';

import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Quality Assurance',
    description: 'We use the finest materials and latest construction technologies to ensure lasting quality.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Timely Delivery',
    description: 'Our track record of delivering projects on or before schedule is a point of pride.',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: 'Premium Design',
    description: 'Architectural excellence that blends luxury with functionality for modern living.',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
    title: 'Transparency',
    description: 'Clear documentation, regular updates, and honest communication at every step.',
  },
];

export default function WhyUs() {
  return (
    <SectionWrapper
      title="Why Choose Gowardhan Developers?"
      subtitle="OUR VALUES"
      bg="#FFFFFF"
    >
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  border: '1px solid #E5E5E5',
                  borderRadius: '0px',
                  backgroundColor: '#FFFFFF',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    '& .icon-box': {
                      backgroundColor: '#C9A14A',
                      color: '#FFFFFF',
                    },
                  },
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '0px',
                    backgroundColor: '#F9F9F9',
                    color: '#C9A14A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 4,
                    transition: 'all 0.3s',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
