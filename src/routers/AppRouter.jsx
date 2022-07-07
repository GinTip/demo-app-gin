import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HelpPage from '../pages/HelpPage';
import RegistrarPersonasPage from '../pages/RegistrarPersonasPage';
import ListarPersonasPage from '../pages/ListarPersonasPage';
import NavBar from '../components/NavBar';
import BlogPage from '../pages/BlogPage';
import UcamperPage from '../pages/UcamperPage';
import AlumnosPage from '../pages/AlumnosPage';
import AlumnoPage from '../pages/AlumnoPage';

const AppRouter = () => {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/help' element={<HelpPage />} />
          <Route path='/registro' element={<RegistrarPersonasPage />} />
          <Route path='/listarPersonas' element={<ListarPersonasPage />} />
          <Route path='/blog' element={<BlogPage articulos={['Artículo 1', 'Artículo 2', 'Artículo 3']}/>} />
          <Route path='/ucamper/:id/:nombre' element={<UcamperPage />} />
          
          <Route path='/alumnos' element={<AlumnosPage />} />
          <Route path='/alumno' element={<AlumnoPage />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
  );
}

export default AppRouter;