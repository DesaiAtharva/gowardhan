'use client';

import React from 'react';
import { Grid, Button, Box } from '@mui/material';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <SectionWrapper
      title="Our Featured Projects"
      subtitle="DISCOVER EXCELLENCE"
      bg="#F9F9F9"
      id="projects"
    >
      <Grid container spacing={4}>
        {featured.map((project) => (
          <Grid item xs={12} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Button
          component={Link}
          href="/projects"
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderColor: '#C9A14A',
            color: '#1A1A1A',
            px: 6,
            '&:hover': { backgroundColor: '#C9A14A', color: '#FFFFFF', borderColor: '#C9A14A' },
          }}
        >
          View All Projects
        </Button>
      </Box>
    </SectionWrapper>
  );
}
