import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PetalRain from './PetalRain';

const OpeningCeremony = ({ onComplete }) => {
  const [isCut, setIsCut] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Lock scrolling initially
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [showOverlay]);

  const handleCut = () => {
    if (isCut) return;
    setIsCut(true);
    
    // Unlock scrolling after cut
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 800);

    // Fade out overlay after cut animation
    setTimeout(() => {
      setShowOverlay(false);
    }, 1800);
  };

  // Add scroll listener to trigger cut
  useEffect(() => {
    const handleScroll = (e) => {
      if (!isCut && e.deltaY > 0) {
        handleCut();
      }
    };
    
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].screenY;
      if (!isCut && touchStartY > touchEndY + 20) {
        handleCut();
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isCut]);

  return (
    <>
      {/* Background Overlay */}
      {showOverlay && (
        <motion.div 
          className="ceremony-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: isCut ? 0 : 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onClick={handleCut}
        >
          <p className="cut-instruction">Scroll or Tap to Cut Ribbon</p>
        </motion.div>
      )}

      {/* Ribbon container */}
      {showOverlay && (
        <div className="ribbon-container">
          <motion.div 
            className="ribbon-half ribbon-left"
            initial={{ x: 0 }}
            animate={{ x: isCut ? '-100vw' : 0 }}
            transition={{ duration: 1.2, ease: [0.75, 0, 0.25, 1] }}
          >
            <div className="ribbon-texture" />
          </motion.div>

          <motion.div 
            className="ribbon-half ribbon-right"
            initial={{ x: 0 }}
            animate={{ x: isCut ? '100vw' : 0 }}
            transition={{ duration: 1.2, ease: [0.75, 0, 0.25, 1] }}
          >
            <div className="ribbon-texture" />
          </motion.div>
          
          <AnimatePresence>
            {!isCut && (
              <motion.div 
                className="ribbon-bow"
                initial={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bow-loop bow-loop-left" />
                <div className="bow-loop bow-loop-right" />
                <div className="bow-knot" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Petal rain starts on cut and persists continuously without unmounting */}
      <PetalRain isActive={isCut} onComplete={onComplete} />
    </>
  );
};

export default OpeningCeremony;
