import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import ContainerCards from './components/ContainerCards';
import Footer from './components/Footer';
import About from './components/About';
import NotFound from './components/NotFound';
import FicheLogement from './components/FicheLogement'; // Import du nouveau composant
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<><Welcome /><ContainerCards /></>} /> {/* Page d'accueil */}
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/logement/:id" element={<FicheLogement />} /> {/* Page de détail logement */}
                <Route path="*" element={<NotFound />} /> {/* Page 404 */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
