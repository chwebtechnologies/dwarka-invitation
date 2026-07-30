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
    
    // Unlock scrolling slightly after the cut
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);

    // Remove overlay entirely after animation finishes
    setTimeout(() => {
      setShowOverlay(false);
    }, 2000);
  };

  // Add scroll listener to trigger cut
  useEffect(() => {
    const handleScroll = (e) => {
      // Prevent default to stop scrolling while uncut
      if (!isCut && e.deltaY > 0) {
        handleCut();
      }
    };
    
    // Support touch swipe
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].screenY;
      if (!isCut && touchStartY > touchEndY + 20) { // Swiped up
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

  if (!showOverlay) {
    return (
      <PetalRain 
        isActive={true} 
        onComplete={() => {
          if (onComplete) onComplete();
        }} 
      />
    );
  }

  return (
    <>
      {/* Background Overlay */}
      <motion.div 
        className="ceremony-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: isCut ? 0 : 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
        onClick={handleCut}
      >
        <p className="cut-instruction">Scroll or Tap to Cut Ribbon</p>
      </motion.div>

      {/* Ribbon container (stays until faded out) */}
      <div className="ribbon-container">
        {/* Left Ribbon */}
        <motion.div 
          className="ribbon-half ribbon-left"
          initial={{ x: 0 }}
          animate={{ x: isCut ? '-100vw' : 0 }}
          transition={{ duration: 1.2, ease: [0.75, 0, 0.25, 1] }}
        >
          <div className="ribbon-texture" />
        </motion.div>

        {/* Right Ribbon */}
        <motion.div 
          className="ribbon-half ribbon-right"
          initial={{ x: 0 }}
          animate={{ x: isCut ? '100vw' : 0 }}
          transition={{ duration: 1.2, ease: [0.75, 0, 0.25, 1] }}
        >
          <div className="ribbon-texture" />
        </motion.div>
        
        {/* Center Bow (Scales and fades out instantly on cut) */}
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

      {/* Start petal rain exactly when cut happens */}
      {isCut && <PetalRain isActive={true} onComplete={onComplete} />}
    </>
  );
};

export default OpeningCeremony;
