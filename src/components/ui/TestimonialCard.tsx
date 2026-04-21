'use client';

import React from 'react';
import { Box, Typography, Avatar, Rating, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, image, rating }: TestimonialCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        backgroundColor: '#F9F9F9',
        borderRadius: '0px',
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #E5E5E5',
      }}
    >
      <FormatQuoteIcon sx={{ position: 'absolute', top: 20, right: 20, fontSize: 40, color: 'rgba(201, 161, 74, 0.2)' }} />
      
      <Rating value={rating} readOnly sx={{ mb: 2, color: '#C9A14A' }} />
      
      <Typography variant="body1" sx={{ mb: 4, flexGrow: 1, fontStyle: 'italic', color: '#444444', lineHeight: 1.8 }}>
        "{content}"
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={image} sx={{ width: 50, height: 50, border: '2px solid #C9A14A' }} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1A1A1A' }}>
            {name}
          </Typography>
          <Typography variant="caption" sx={{ color: '#888888' }}>
            {role}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
