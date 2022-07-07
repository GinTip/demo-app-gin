import React, { useState } from 'react';

const AlumnoPage = () => {
  const useCallback (
    [alumnos] = useState (
      [
        {
          id: 1,
          nombre: 'César',
        },
        {
          id: 2,
          nombre: 'Cristobal',
        },
        {
          id: 3,
          nombre: 'Daniel',
        },
      ]
    )
  )
  
  return (
    <div>Alumno Page</div>
  )
}

export default AlumnoPage