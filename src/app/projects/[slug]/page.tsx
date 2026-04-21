'use client';

import React, { use } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  Divider,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Box sx={{ pt: 12 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          width: '100%',
          position: 'relative',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${project.image}") no-repeat center center/cover`,
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF'
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="overline" sx={{ letterSpacing: 4, color: '#C9A14A', fontWeight: 700 }}>
            {project.type}
          </Typography>
          <Typography variant="h1" sx={{ mt: 1, mb: 2 }}>{project.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon />
            <Typography variant="h6">{project.location}</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={8}>
            {/* Overview */}
            <Typography variant="h3" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Overview</Typography>
            <Typography variant="body1" sx={{ mb: 6, color: '#444444', lineHeight: 2, fontSize: '1.1rem' }}>
              {project.description}
            </Typography>

            {/* Gallery */}
            <Typography variant="h3" sx={{ mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Gallery</Typography>
            <ImageList variant="quilted" cols={2} rowHeight={300} gap={16}>
              {project.gallery.map((item, index) => (
                <ImageListItem key={index} cols={index === 0 ? 2 : 1}>
                  <img src={item} alt={`${project.name} ${index}`} loading="lazy" style={{ objectFit: 'cover' }} />
                </ImageListItem>
              ))}
            </ImageList>

            {/* Amenities */}
            <Typography variant="h3" sx={{ mt: 8, mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Amenities</Typography>
            <Grid container spacing={3}>
              {project.amenities.map((amenity, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <Box sx={{ textAlign: 'center', p: 3, border: '1px solid #E5E5E5' }}>
                    <CheckCircleIcon sx={{ color: '#C9A14A', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{amenity.name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Map */}
            <Typography variant="h3" sx={{ mt: 8, mb: 4, fontFamily: 'var(--font-playfair-display)' }}>Location Map</Typography>
            <Box sx={{ height: 400, width: '100%', backgroundColor: '#F0F0F0', border: '1px solid #E5E5E5' }}>
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.7803305!3d18.5246164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67486e69%3A0x70abc9337ef18f!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713693600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={4} sx={{ position: 'sticky', top: 120 }}>
              <Paper sx={{ p: 4, borderRadius: 0, border: '1px solid #E5E5E5' }} elevation={0}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>Quick Highlights</Typography>
                <Stack spacing={3}>
                   <Box>
                    <Typography variant="caption" color="textSecondary">PRICE RANGE</Typography>
                    <Typography variant="h6" sx={{ color: '#C9A14A' }}>{project.price}</Typography>
                  </Box>
                  <Divider />
                   <Box>
                    <Typography variant="caption" color="textSecondary">AREA RANGE</Typography>
                    <Typography variant="h6">{project.area}</Typography>
                  </Box>
                  <Divider />
                   <Box>
                    <Typography variant="caption" color="textSecondary">POSSESSION</Typography>
                    <Typography variant="h6">{project.possession}</Typography>
                  </Box>
                  <Divider />
                   <Box>
                    <Typography variant="caption" color="textSecondary">RERA NUMBER</Typography>
                    <Typography variant="h6">{project.rera}</Typography>
                  </Box>
                </Stack>
                <Button 
                  fullWidth 
                  variant="contained" 
                  startIcon={<DownloadIcon />}
                  sx={{ mt: 4, py: 1.5 }}
                >
                  Download Brochure
                </Button>
              </Paper>

              <Paper sx={{ p: 4, borderRadius: 0, backgroundColor: '#1A1A1A', color: '#FFFFFF' }} elevation={0}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>Enquire Now</Typography>
                <Stack spacing={2}>
                  <Button variant="outlined" sx={{ color: '#FFFFFF', borderColor: '#FFFFFF', py: 1.5 }}>
                    Request Call Back
                  </Button>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    startIcon={<PhoneIcon />}
                    sx={{ py: 1.5, backgroundColor: '#C9A14A', '&:hover': { backgroundColor: '#A68239' } }}
                  >
                    +91 98765 43210
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
