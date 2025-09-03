import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Filtros from './components/Filtros';
import ListaOportunidades from './components/ListaOportunidades';
import DetalleOportunidad from './components/DetalleOportunidad';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Contacto from './components/Contacto';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import TerminosServicio from './components/TerminosServicio';
import Cookies from './components/Cookies';
import CookieBanner from './components/CookieBanner';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';


// Componente interno para manejar la lógica de navegación
function AppContent() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const location = useLocation();

  // Google Analytics - Tracking ID real
  const GA_TRACKING_ID = 'G-0ST7KCCY1X';

  // Manejar navegación con estado para filtros
  useEffect(() => {
    if (location.state && location.state.categoriaActiva) {
      setCategoriaActiva(location.state.categoriaActiva);
      setBusqueda('');
      
      // Hacer scroll a las oportunidades después de un pequeño delay
      setTimeout(() => {
        const oportunidadesSection = document.getElementById('oportunidades');
        if (oportunidadesSection) {
          oportunidadesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location.state]);

  return (
    <>
      <GoogleAnalytics trackingId={GA_TRACKING_ID} />
      <Header 
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        setBusqueda={setBusqueda}
      />
      <Hero />
      <Filtros 
        categoriaActiva={categoriaActiva}
        setCategoriaActiva={setCategoriaActiva}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <ListaOportunidades 
        categoriaActiva={categoriaActiva}
        busqueda={busqueda}
      />
      <Footer />
      <CookieBanner />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/oportunidad/:id" element={<DetalleOportunidad />} />
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-servicio" element={<TerminosServicio />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
