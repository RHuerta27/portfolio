import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const CurriculumModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Curriculum</DialogTitle>
      <DialogContent>
        <Button 
          variant="contained" 
          color="info" 
          onClick={() => window.open('/Raul_Huerta_CVEN.pdf')}
          sx={{ marginBottom: '1rem', marginLeft: '1rem' }}
        >
          Descargar CV en Inglés
        </Button>
        <Button 
          variant="contained" 
          color="info" 
          onClick={() => window.open('/Raul_Huerta_CVES.pdf')}
          sx={{ marginBottom: '1rem', marginLeft: '1rem' }}
        >
          Descargar CV en Español
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CurriculumModal;
