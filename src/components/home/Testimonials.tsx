'use client';

import React from 'react';
import { Grid } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';
import TestimonialCard from '@/components/ui/TestimonialCard';

const reviews = [
  {
    name: 'Rajesh Sharma',
    role: 'Home Owner at Gowardhan Royale',
    content: 'The attention to detail and quality of construction is unmatched. Gowardhan Developers truly delivers on their promise of luxury.',
    rating: 5,
  },
  {
    name: 'Anjali Deshpande',
    role: 'Investor',
    content: 'Professional management and transparent dealings. I have invested in two projects and the appreciation has been excellent.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Tenant at The Landmark',
    content: 'The location and amenities provided are perfect for my business. The maintenance service is also top-notch.',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper
      title="What Our Clients Say"
      subtitle="TESTIMONIALS"
      bg="#F9F9F9"
    >
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TestimonialCard {...review} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
