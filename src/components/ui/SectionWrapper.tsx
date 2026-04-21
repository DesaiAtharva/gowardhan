'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  bg?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  title,
  subtitle,
  bg = '#FFFFFF',
  id,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: bg,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth={fullWidth ? false : 'xl'}>
        {(title || subtitle) && (
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: '#C9A14A',
                    fontWeight: 700,
                    letterSpacing: 2,
                    mb: 1,
                    display: 'block',
                  }}
                >
                  {subtitle}
                </Typography>
              </motion.div>
            )}
            {title && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    mb: 2,
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      width: 60,
                      height: 3,
                      backgroundColor: '#C9A14A',
                      transform: 'translateX(-50%)',
                    },
                  }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}
          </Box>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
