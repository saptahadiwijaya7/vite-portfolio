import React from "react";
import SimpleContainer from "./Container";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TitlebarImageList from "./ImageList";

export default function LandingPage() {
    return (
      <Container maxWidth="xl" sx={{ bgcolor: '#000', height: '200vh' }}>
        <Box sx={{ bgcolor: 'transparent', height: '100vh' }}>
            <TitlebarImageList />
        </Box>
      </Container>
    );
  }