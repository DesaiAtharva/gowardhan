'use client';

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  ongoing: '#C9A14A',
  completed: '#4CAF50',
  upcoming: '#2196F3',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="260"
            image={project.image}
            alt={project.name}
            sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } }}
          />
          <Chip
            label={project.status.toUpperCase()}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: statusColors[project.status],
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.7rem',
              borderRadius: '0px',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="overline" sx={{ color: '#C9A14A', fontWeight: 700, letterSpacing: 1 }}>
            {project.type}
          </Typography>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
            {project.name}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: '#666666' }}>
            <LocationOnIcon sx={{ fontSize: '1rem', mr: 0.5, color: '#C9A14A' }} />
            <Typography variant="body2">{project.location}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: '#666666' }}>
            <CalendarMonthIcon sx={{ fontSize: '1rem', mr: 0.5, color: '#C9A14A' }} />
            <Typography variant="body2">Possession: {project.possession}</Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#888888', mb: 3, height: 40, overflow: 'hidden' }}>
            {project.shortDescription}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A' }}>
              {project.price}
            </Typography>
            <Button
              component={Link}
              href={`/projects/${project.slug}`}
              variant="outlined"
              size="small"
              sx={{ borderColor: '#C9A14A', color: '#1A1A1A', '&:hover': { backgroundColor: '#C9A14A', color: '#FFFFFF' } }}
            >
              Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
