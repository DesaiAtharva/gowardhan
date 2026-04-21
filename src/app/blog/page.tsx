'use client';

import React from 'react';
import { Container, Grid, Typography, Box, Card, CardMedia, CardContent, Button, Stack } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    title: '5 Reasons to Invest in Pune Real Estate in 2024',
    date: 'April 15, 2024',
    excerpt: 'Pune continues to be one of the top destinations for property investment in India. Here are five compelling reasons why...',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'The Ultimate Guide to Buying Your First Home',
    date: 'March 22, 2024',
    excerpt: 'Buying your first home is a major milestone. Our comprehensive guide helps you navigate the process with ease...',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Luxury Living: What to Look for in a Premium Project',
    date: 'March 10, 2024',
    excerpt: 'Luxury is about more than just a high price tag. Discover the essential features that define a truly premium residential project...',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600',
  },
];

export default function BlogPage() {
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
             Real Estate <span style={{ color: '#C9A14A' }}>Insights</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.8 }}>
            Stay updated with the latest trends, guides, and news in the real estate world.
          </Typography>
        </Container>
      </Box>

      <SectionWrapper title="Latest Articles" subtitle="BLOG">
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card sx={{ borderRadius: 0, border: '1px solid #E5E5E5', height: '100%', display: 'flex', flexDirection: 'column' }} elevation={0}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography variant="caption" sx={{ color: '#C9A14A', fontWeight: 700 }}>
                      {post.date}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: 700, lineHeight: 1.4 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
                      {post.excerpt}
                    </Typography>
                    <Button variant="text" sx={{ color: '#C9A14A', fontWeight: 700, p: 0, minWidth: 0 }}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </Box>
  );
}
