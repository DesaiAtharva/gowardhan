'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Projects Delivered', value: '25+' },
  { label: 'Happy Customers', value: '2000+' },
  { label: 'Ongoing Projects', value: '08+' },
];

export default function Stats() {
  return (
    <Box sx={{ backgroundColor: '#1A1A1A', py: 8, color: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: '#C9A14A',
                    mb: 1,
                    fontFamily: 'var(--font-playfair-display)',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: 2,
                    color: '#AAAAAA',
                    fontSize: '0.8rem',
                  }}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
