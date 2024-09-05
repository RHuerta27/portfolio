import React from 'react';
import { Avatar, Grid, Typography, Box, Paper, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TUDNLogo from '../assets/tudn.webp';
import LELogo from '../assets/estrellas-logo.png';
import Logis from '../assets/logis.jpeg';
import MaddLogo from '../assets/madd.jpeg'; 
import TelevisaLogo from '../assets/televisa.jpg'; 
import LogisLogo from '../assets/logis.jpeg'; 
import Profile from '../assets/profile.jpeg';
import ReactImage from '../assets/React_Native_Logo.png';
import JavaScriptImage from '../assets/javascript2.png';
import JavaImage from '../assets/java.png';
import CssImage from '../assets/css.jpg';
import HtmlImage from '../assets/html.png';
import SwiftImage from '../assets/swift.jpg';
import FirebaseImage from '../assets/Firebase.png';
import PythonImage from '../assets/python.png';
import PHPImage from '../assets/php.png';
import MysqlImage from '../assets/mysql.png';
import GitImage from '../assets/git.png';
import GitHubImage from '../assets/github.webp';

const skillImages = {
  "React": ReactImage,
  "React Native": ReactImage,
  "JavaScript": JavaScriptImage,
  "Java (Android)": JavaImage,
  "CSS": CssImage,
  "HTML": HtmlImage,
  "Swift (iOS)": SwiftImage,
  "Firebase": FirebaseImage,
  "Python": PythonImage,
  "PHP": PHPImage,
  "MySQL": MysqlImage,
  "Git": GitImage,
  "GitHub": GitHubImage,
} 

const skills = {
  "Móvil": ["React Native", "Java (Android)", "Swift (iOS)", "Firebase"],
  "Front-end": ["React", "React Native", "JavaScript", "CSS", "HTML",],
  "Back-end": ["Python", "PHP"],
  "Base de datos": ["MySQL", "Firebase"],
  "Control de versiones": ["Git", "GitHub"],
};
const projects = [
  {
    title: "TUDN",
    description: "Aplicación deportiva, participé en el ciclo de vida y generación de componentes para la app mobile.",
    image: TUDNLogo
  },
  {
    title: "Las Estrellas",
    description: "Aplicación principalmente de video, participé en el ciclo de vida y generación de componentes para la app mobile.",
    image: LELogo
  },
  {
    title: "Control de insumos en almacén",
    description: "Aplicación móvil enfocada en el control de insumos (Papel burbuja, Cartón, etc.) dentro del almacén.",
    image: Logis
  }
];

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

const Home = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: 'background.default' }}>
      <Grid container spacing={4}>
        <Grid 
          item 
          xs={12} 
          md={4} 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: { xs: '2rem', md: 0 } 
          }}
        >
          <Avatar
            alt="Raúl Iván Huerta Juárez"
            src={Profile}
            sx={{ 
              width: { xs: 150, md: 200 },  // Tamaño más pequeño en pantallas pequeñas
              height: { xs: 200, md: 250 }, // Ajuste dinámico para pantallas más grandes
              objectFit: 'cover', // Asegura que la imagen se ajuste bien
              border: '2px solid', // Agrega un borde para hacerla más atractiva visualmente (opcional)
              borderColor: 'primary.main' // Color del borde
            }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" component="h1" sx={{ color: 'primary.main' }}>
            Ingeniero en Tecnologías de la Información y Comunicaciones
          </Typography>
          <Typography variant="h4" color="text.primary">
            Raúl Iván Huerta Juárez
          </Typography>

          {/* Añadir una estructura separada para cada campo */}
          <Box sx={{ marginTop: '1rem' }}>
            {/* Email */}
            <Box display="flex" alignItems="center" sx={{ marginBottom: '1rem' }}>
              <EmailIcon />
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', color: 'primary.main' }}>
                ivan_fix@hotmail.com
              </Typography>
            </Box>
            
            {/* Teléfono */}
            <Box display="flex" alignItems="center">
              <PhoneIcon />
              <Typography variant="body1" sx={{ marginLeft: '0.5rem', color: 'primary.main' }}>
                551694 9597
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ marginTop: '1rem' }}>
            Soy un desarrollador Front-End con sólida experiencia en la creación tanto de aplicaciones móviles como de sitios web.
            Mi enfoque se centra en fusionar un diseño atractivo con un código limpio y eficiente, con el objetivo de proporcionar experiencias de usuario excepcionales.
          </Typography>
        </Grid>


        {/* Sección Proyectos */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', color: 'primary.main' }}>
            Proyectos
          </Typography>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'background.paper' }}>
                  <Grid 
                    container 
                    spacing={2}
                    alignItems="center"
                  >
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
                        src={project.image}
                        alt={project.title}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" component="p">
                        {project.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sección de Habilidades */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', color: 'primary.main' }}>
            Habilidades técnicas
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(skills).map(([category, skillSet]) => (
              <Grid item xs={12} md={4} key={category}>
                <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'background.paper' }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skillSet.map((skill) => (
                      <Chip
                        key={skill}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* Muestra la imagen si existe para la habilidad */}
                            {skillImages[skill] && (
                              <Avatar
                                src={skillImages[skill]}
                                alt={skill}
                                sx={{ width: 30, height: 30, marginRight: '0.5rem' }}
                              />
                            )}
                            {skill}
                          </Box>
                        }
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sección de Experiencia */}
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" sx={{ marginBottom: '1rem', color: 'primary.main' }}>
            Experiencia
          </Typography>
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

export default Home;
