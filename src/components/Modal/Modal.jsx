import React, { useEffect, useRef } from 'react';
import "./Modal.css"

import { motion, AnimatePresence } from 'framer-motion';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.querySelector(".modal-overlay").addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
        className="modal-overlay"
        >
          <motion.div
            key="modal"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0 , opacity: 1 }}
            exit={{ y: -100, opacity: 0, transition:{duration: 0.5} }}
            transition={{ duration: 1 }}
            className="modal-content"
            ref={modalRef}
          >
            {children}
          </motion.div>

          <motion.button 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            exit={{ y: 100, opacity: 0, transition:{duration: 0.5} }}
            transition={{ duration: 1 }}
            className="modal-close-button"
            onClick={onClose}
            >
            Close
          </motion.button>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;