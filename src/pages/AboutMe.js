import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de conflictos",
  "Pensamiento Crítico",
  "Liderazgo",
];

const personalValues = [
  "Responsabilidad",
  "Empatía",
  "Innovación",
  "Integridad",
];

const personalGoals = [
    "Crecimiento Personal",
    "Calidad de vida",
    "Libertad FInanciera",
];

const personalHobbies = [
    "Pasar tiempo con mi familia",
    "Practicar Fútbol",
    "Videojuegos",
];

const AboutMe = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'background.default' }}>
      <Grid container spacing={4}>

        {/* Sección de Habilidades Blandas */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
            Habilidades Blandas
          </Typography>
          <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 2 }}>
            {softSkills.map((skill, index) => (
              <ListItem key={index} sx={{ borderBottom: '1px solid #363535' }}>
                <ListItemText primary={skill} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Sección de Valores Personales */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
            Valores Personales
          </Typography>
          <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 2 }}>
            {personalValues.map((value, index) => (
              <ListItem key={index} sx={{ borderBottom: '1px solid #363535' }}>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Sección de Pasión y Motivación */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
            Pasión y Motivación
          </Typography>
          <Box sx={{ padding: '1rem', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 2 }}>
            <Typography variant="body1" component="p">
            Mi motivación por la tecnología surge de la fascinación por las infinitas posibilidades que ofrece para mejorar nuestra vida diaria. Desde el desarrollo de aplicaciones móviles hasta soluciones web, la tecnología nos permite crear herramientas que resuelven problemas, optimizan procesos y conectan a las personas de maneras inimaginables. Con las habilidades que he adquirido, me apasiona no solo desarrollar productos innovadores, sino también compartir ese conocimiento con la comunidad.
            Me impulsa ayudar a las personas a entender y aprovechar la tecnología para mejorar sus vidas. Estoy convencido de que, al compartir y fomentar su uso, podemos empoderar a más personas para que sean parte activa de la transformación digital y hagan frente a los retos del mundo moderno. Mi objetivo es contribuir a una sociedad más tecnológica y accesible para todos.
            </Typography>
          </Box>
        </Grid>

        {/* Sección de Metas y Aspiraciones */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
            Metas y Aspiraciones
          </Typography>
          <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 2 }}>
            {personalGoals.map((value, index) => (
              <ListItem key={index} sx={{ borderBottom: '1px solid #363535' }}>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Sección de Pasatiempos */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
            Pasatiempos
          </Typography>
          <List sx={{ bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 2 }}>
            {personalHobbies.map((value, index) => (
              <ListItem key={index} sx={{ borderBottom: '1px solid #363535' }}>
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AboutMe;
