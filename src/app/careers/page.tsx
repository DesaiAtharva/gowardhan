'use client';

import React from 'react';
import { Container, Grid, Typography, Box, Paper, Stack, Button, TextField } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';

const jobs = [
  { title: 'Senior Sales Executive', location: 'Pune', type: 'Full-time', description: 'We are looking for an experienced sales professional with a track record in luxury real estate.' },
  { title: 'Project Architect', location: 'Pune', type: 'Full-time', description: 'Join our design team to create the next generation of Pune landmarks.' },
  { title: 'Site Engineer', location: 'Various Locations', type: 'Full-time', description: 'Oversee construction activities and ensure quality compliance at our project sites.' },
];

export default function CareersPage() {
  return (
    <Box sx={{ pt: 12 }}>
      {/* Hero */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2, fontFamily: 'var(--font-playfair-display)' }}>
             Work with <span style={{ color: '#C9A14A' }}>Us</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.8 }}>
            Build your career with one of Pune's leading real estate brands.
          </Typography>
        </Container>
      </Box>

      <SectionWrapper title="Current Openings" subtitle="JOIN THE TEAM">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              {jobs.map((job, index) => (
                <Paper key={index} sx={{ p: 4, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>{job.title}</Typography>
                      <Typography variant="caption" sx={{ color: '#C9A14A', fontWeight: 600 }}>{job.location} | {job.type}</Typography>
                    </Box>
                    <Button variant="outlined" size="small">Apply Now</Button>
                  </Box>
                  <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                </Paper>
              ))}
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 6, borderRadius: 0, backgroundColor: '#F9F9F9', border: '1px solid #E5E5E5' }} elevation={0}>
              <Typography variant="h4" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>General Application</Typography>
              <Typography variant="body2" sx={{ mb: 4, color: '#666666' }}>
                Don't see a role that fits? Send us your resume anyway and we'll keep you in mind for future openings.
              </Typography>
              <form>
                <Stack spacing={3}>
                  <TextField fullWidth label="Full Name" variant="outlined" required />
                  <TextField fullWidth label="Email Address" variant="outlined" type="email" required />
                  <TextField fullWidth label="Phone Number" variant="outlined" required />
                   <Button variant="outlined" component="label" fullWidth sx={{ py: 1.5 }}>
                    Upload Resume (PDF)
                    <input type="file" hidden accept=".pdf" />
                  </Button>
                  <Button variant="contained" fullWidth size="large" sx={{ py: 2 }}>
                    Submit Application
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}
