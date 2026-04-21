'use client';

import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Tabs, Tab } from '@mui/material';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const filteredProjects = projects.filter((project) => {
    if (value === 0) return true; // All
    if (value === 1) return project.status === 'ongoing';
    if (value === 2) return project.status === 'completed';
    if (value === 3) return project.status === 'upcoming';
    return true;
  });

  return (
    <Box sx={{ pt: 12 }}>
      <Box
        sx={{
          py: 8,
          backgroundColor: '#1A1A1A',
          color: '#FFFFFF',
          textAlign: 'center',
          mb: 4
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 2, fontFamily: 'var(--font-playfair-display)' }}>
            Our <span style={{ color: '#C9A14A' }}>Projects</span>
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.8 }}>
            Explore our diverse portfolio of luxury residential and premium commercial landmarks.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ pb: 12 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            centered
            sx={{
              '& .MuiTabs-indicator': { backgroundColor: '#C9A14A' },
              '& .MuiTab-root': { fontWeight: 700, fontSize: '1rem', color: '#666666' },
              '& .Mui-selected': { color: '#C9A14A !important' },
            }}
          >
            <Tab label="All Projects" />
            <Tab label="Ongoing" />
            <Tab label="Completed" />
            <Tab label="Upcoming" />
          </Tabs>
        </Box>

        <Grid container spacing={4}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard project={project} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center', py: 10, color: '#888888' }}>
                No projects found in this category.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
