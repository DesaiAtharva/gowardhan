'use client';

import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

export default function AboutPreview() {
  return (
    <SectionWrapper id="about">
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Gowardhan Developers"
                sx={{
                  width: '100%',
                  height: 'auto',
                  border: '1px solid #E5E5E5',
                  p: 2,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '20px 20px 0px #C9A14A',
                }}
              />
            </motion.div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              sx={{ color: '#C9A14A', fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}
            >
              LEGACY OF TRUST
            </Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Transforming Visions into Architectural <span style={{ color: '#C9A14A' }}>Landmarks</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#666666', lineHeight: 1.8 }}>
              With over 15 years of excellence, Gowardhan Developers has been at the forefront of Pune's real estate evolution. We don't just build structures; we build relationships based on trust, transparency, and superior craftsmanship.
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, color: '#666666', lineHeight: 1.8 }}>
              Every project we undertake is a testament to our commitment to luxury, innovation, and sustainable development. We believe in creating spaces that enrich lives and inspire communities.
            </Typography>
            <Button
              component={Link}
              href="/about"
              variant="contained"
              size="large"
              sx={{ px: 6 }}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
