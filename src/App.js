import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation/Navigation'
import { Error } from './pages/Error/Error';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { Modal } from './components/Modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <Router>
      <Navigation openModal={(component) => openModal(component)} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About openModal={(component) => openModal(component)} />} />
          <Route path="/gallery" element={<Gallery openModal={(component) => openModal(component)} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </AnimatePresence>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
      >
        {modalContent}
      </Modal>
    </Router>
  );
}

export default App;
