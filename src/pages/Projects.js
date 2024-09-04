import React from 'react';
import { Grid, Box, Paper, Typography, Avatar, Link } from '@mui/material';

// Importa las imágenes de tus proyectos
import tudn from '../assets/tudn.webp';
import LELogo from '../assets/estrellas-logo.png';
import Logis from '../assets/logis.jpeg';

// Lista de proyectos
const projects = [
  {
    title: "TUDN",
    description: "Aplicación deportiva. Involucrado en actualizaciòn y mantenimiento de aplicación movil, creación de nuevos componentes reutilizables, actualización de versiones en tienda y de nuevos assets.",
    tech: "React Native, JAVA, Swift",
    image: tudn,
    links: [
      { name: "Play Store", url: "https://play.google.com/store/apps/details?id=com.july.univision&hl=es_MX" },
      { name: "App Store", url: "https://apps.apple.com/co/app/tudn-tu-deportes-network/id353665650" },
    ]
  },
  {
    title: "Las Estrellas",
    description: "Aplicación de video. Involucrado en actualizaciòn y mantenimiento de aplicación movil, creación de nuevos comopnentes reutilizables, actualización de versiones en tienda y de nuevos assets.",
    tech: "React Native, JAVA, Swift",
    image: LELogo,
    links: [
      { name: "Play Store", url: "https://play.google.com/store/apps/details?id=mx.naat.televisa.video&hl=es_MX" },
      { name: "App Store", url: "https://apps.apple.com/mx/app/las-estrellas/id370299188" },
      { name: "App Gallery", url: "https://appgallery.huawei.com/app/C101081783?sharePrepath=ag&locale=es_US&source=appshare&subsource=C101081783&shareTo=com.whatsapp&shareFrom=appmarket&shareIds=5924d31c305140bdb8296651fd60194f_com.whatsapp&callType=SHARE" },

    ]
  },
  
  {
    title: "Control de isnumos dentro del almacen",
    description: "Aplicación móvil enfocada en el control de insumos (Papel burbuja, Cartón, etc.) dentro del almacén.",
    tech: "Xamarin, C#",
    image: Logis,
    links: []
  }
];

const Projects = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'background.default' }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'primary.main' }}>
        Proyectos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} sx={{ padding: '1.5rem', backgroundColor: 'background.paper' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid 
                  item 
                  xs={12} sm={2} 
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    marginBottom: { xs: '1rem', sm: 0 } 
                  }}
                >
                  <Avatar
                    variant="square"
                    src={project.image}
                    alt={project.title}
                    sx={{ 
                      width: { xs: '60px', sm: '100%' }, 
                      height: { xs: '60px', sm: '100%' }, 
                      objectFit: 'contain' 
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" component="p" sx={{ marginBottom: '1rem' }}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '1rem' }}>
                    Principal tecnología: {project.tech}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {project.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.url} target="_blank" rel="noopener" variant="body2" sx={{ textDecoration: 'none', color: 'primary.main' }}>
                        {link.name}
                      </Link>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
