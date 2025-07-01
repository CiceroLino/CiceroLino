import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0,0,0,0.7)',
      zIndex: 99999,
    }}
    aria-label="Carregando conteúdo"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      style={{
        width: 60,
        height: 60,
        border: '6px solid #61dafb',
        borderTop: '6px solid transparent',
        borderRadius: '50%',
      }}
    />
  </div>
);
