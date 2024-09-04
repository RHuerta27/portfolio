import React from 'react';
import { Box, Grid, Typography, Paper, Avatar } from '@mui/material';
import MaddLogo from '../assets/madd.jpeg';
import TelevisaLogo from '../assets/televisa.jpg';
import LogisLogo from '../assets/logis.jpeg';

const experiences = [
  {
    company: "MADD Systems GPS Control",
    role: "Desarrollador",
    duration: "Mayo 2024 - Agosto 2024",
    technologies: "React, Python, GO, Ruby, ElasticStack, Shell",
    logo: MaddLogo
  },
  {
    company: "Televisa",
    role: "Desarrollador",
    duration: "Diciembre 2019 - Julio 2023",
    technologies: "React, React Native, Javascript, Node JS, GraphQL",
    logo: TelevisaLogo
  },
  {
    company: "Logisfashion",
    role: "Desarrollador móvil",
    duration: "Junio 2019 - Octubre 2019",
    technologies: "Xamarin, C#",
    logo: LogisLogo
  }
];

const Career = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'background.default' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Carrera
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {experiences.map((experience, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'background.paper' }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid 
                      item 
                      xs={4} 
                      sx={{ 
                        display: 'flex', 
                        justifyContent: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      <Avatar
                        variant="square"
                        src={experience.logo}
                        alt={experience.company}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {experience.company}
                      </Typography>
                      <Typography variant="body1" component="p">
                        Puesto: {experience.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component="p">
                        Duración: {experience.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component="p">
                        Experiencia tecnológica ganada: {experience.technologies}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Career;
