'use client';

import React from 'react';
import { Container, Grid, Typography, Box, Paper, Stack, Avatar } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

const values = [
  { title: 'Vision', content: 'To be the most trusted and respected real estate brand in India, recognized for architectural excellence and customer centricity.' },
  { title: 'Mission', content: 'To create landmarks that offer superior value and enhance the quality of life through innovation, quality construction, and transparency.' },
  { title: 'Values', content: 'Integrity, Quality, Commitment, and Innovation are the pillars on which our legacy is built.' }
];

const leaders = [
  { name: 'Vijay Gowardhan', role: 'Founder & Chairman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
  { name: 'Rahul Gowardhan', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
  { name: 'Sanjay Deshmukh', role: 'Chief Architect', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
];

export default function AboutPage() {
  return (
    <Box sx={{ pt: 12 }}>
      {/* Hero */}
      <Box
        sx={{
          py: 12,
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2, fontFamily: 'var(--font-playfair-display)' }}>
             Our <span style={{ color: '#C9A14A' }}>Story</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.8 }}>
            A legacy built on trust, innovation, and architectural brilliance since 2010.
          </Typography>
        </Container>
      </Box>

      {/* Story Details */}
      <SectionWrapper>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Crafting Pune's Skyline</Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#444444', lineHeight: 2 }}>
              Founded in 2010 by Mr. Vijay Gowardhan, Gowardhan Developers started with a simple vision: to provide high-quality, luxury homes that people could trust. Over the past 15 years, we have grown from a boutique builder to one of Pune's most respected real estate developers.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444444', lineHeight: 2 }}>
              With over 25 successfully delivered projects and thousands of happy families, our reputation is built on the solid foundation of quality materials, timely delivery, and a forward-thinking approach to design. We believe that a home is more than just four walls; it's a legacy you leave behind.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Our Office"
              sx={{ width: '100%', height: 'auto', boxShadow: '20px 20px 0px #C9A14A' }}
            />
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Vision/Mission */}
      <Box sx={{ backgroundColor: '#F9F9F9', py: 12 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {values.map((v, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 6, height: '100%', textAlign: 'center', borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                  <Typography variant="h4" sx={{ color: '#C9A14A', mb: 3, fontFamily: 'var(--font-playfair-display)' }}>{v.title}</Typography>
                  <Typography variant="body1" sx={{ color: '#666666', lineHeight: 1.8 }}>{v.content}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Leadership */}
      <SectionWrapper title="Our Leadership" subtitle="THE VISIONARIES">
        <Grid container spacing={6}>
          {leaders.map((leader, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar 
                  src={leader.image} 
                  sx={{ width: 200, height: 200, mx: 'auto', mb: 3, border: '4px solid #C9A14A' }} 
                />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>{leader.name}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#C9A14A' }}>{leader.role}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </Box>
  );
}
