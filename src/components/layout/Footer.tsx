'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', pt: 8, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: '#C9A14A',
                mb: 3,
                fontFamily: 'var(--font-playfair-display)',
              }}
            >
              GOWARDHAN DEVELOPERS
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, color: '#AAAAAA', lineHeight: 2, maxWidth: 350 }}>
              Building landmarks that define excellence. We are committed to delivering premium living and commercial spaces with a focus on quality, timely delivery, and customer satisfaction.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: '#FFFFFF', '&:hover': { color: '#C9A14A' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#FFFFFF', '&:hover': { color: '#C9A14A' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: '#FFFFFF', '&:hover': { color: '#C9A14A' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: '#FFFFFF', '&:hover': { color: '#C9A14A' } }}>
                <XIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              <Link href="/" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Home</Link>
              <Link href="/projects" style={{ color: '#AAAAAA', textDecoration: 'none' }}>All Projects</Link>
              <Link href="/about" style={{ color: '#AAAAAA', textDecoration: 'none' }}>About Us</Link>
              <Link href="/blog" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Latest News</Link>
              <Link href="/careers" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Careers</Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 3 }}>
              Our Projects
            </Typography>
            <Stack spacing={2}>
              <Link href="/projects/gowardhan-royale" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Gowardhan Royale</Link>
              <Link href="/projects/golden-crest" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Golden Crest</Link>
              <Link href="/projects/the-landmark" style={{ color: '#AAAAAA', textDecoration: 'none' }}>The Landmark</Link>
              <Link href="/projects" style={{ color: '#AAAAAA', textDecoration: 'none' }}>Upcoming Projects</Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 3 }}>
              Contact Us
            </Typography>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#C9A14A' }} />
                <Typography variant="body2" sx={{ color: '#AAAAAA' }}>
                  123 Luxury Avenue, Baner,<br />Pune, Maharashtra 411045
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <PhoneIcon sx={{ color: '#C9A14A' }} />
                <Typography variant="body2" sx={{ color: '#AAAAAA' }}>
                  +91 20 1234 5678<br />+91 98765 43210
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <EmailIcon sx={{ color: '#C9A14A' }} />
                <Typography variant="body2" sx={{ color: '#AAAAAA' }}>
                  info@gowardhandevelopers.com<br />sales@gowardhandevelopers.com
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#888888' }}>
            © {currentYear} Gowardhan Developers. All Rights Reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy-policy" style={{ color: '#888888', fontSize: '12px' }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: '#888888', fontSize: '12px' }}>Terms & Conditions</Link>
            <Link href="/rera-disclaimer" style={{ color: '#888888', fontSize: '12px' }}>Disclaimer</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
