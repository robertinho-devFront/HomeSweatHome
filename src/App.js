import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import FicheLogement from "./pages/Logement/FicheLogement"; 
import "./App.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/logement/:id" element={<FicheLogement />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <p className="hidden">renders learn react link</p>
      </Layout>
    </Router>
  
  );
};

export default App;
