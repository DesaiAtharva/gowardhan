'use client';

import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Stack,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our team will get back to you soon!');
  };

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
             Get in <span style={{ color: '#C9A14A' }}>Touch</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.8 }}>
            Have a question? We're here to help you find your dream space.
          </Typography>
        </Container>
      </Box>

      <SectionWrapper>
        <Grid container spacing={8}>
          {/* Contact Details */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Contact Information</Typography>
            <Stack spacing={4}>
              <Paper sx={{ p: 3, display: 'flex', gap: 3, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                <Box sx={{ backgroundColor: '#F9F9F9', p: 2, color: '#C9A14A' }}>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Office Address</Typography>
                  <Typography variant="body1" color="textSecondary">
                    123 Luxury Avenue, Baner Road,<br />Pune, Maharashtra 411045
                  </Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 3, display: 'flex', gap: 3, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                <Box sx={{ backgroundColor: '#F9F9F9', p: 2, color: '#C9A14A' }}>
                  <PhoneIcon />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Call Us</Typography>
                  <Typography variant="body1" color="textSecondary">
                    +91 20 1234 5678<br />+91 98765 43210
                  </Typography>
                </Box>
              </Paper>

              <Paper sx={{ p: 3, display: 'flex', gap: 3, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                <Box sx={{ backgroundColor: '#F9F9F9', p: 2, color: '#C9A14A' }}>
                  <EmailIcon />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>Email Us</Typography>
                  <Typography variant="body1" color="textSecondary">
                    info@gowardhandevelopers.com<br />sales@gowardhandevelopers.com
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 6, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
              <Typography variant="h4" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Send a Message</Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone Number" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Email Address" variant="outlined" type="email" required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={4} variant="outlined" required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth 
                      size="large"
                      sx={{ py: 2, fontSize: '1.1rem' }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Map */}
      <Box sx={{ height: 500, width: '100%', mt: 4 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.7803305!3d18.5246164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67486e69%3A0x70abc9337ef18f!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713693600000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
