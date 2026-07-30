import React, { useEffect, useState } from 'react';

const PetalRain = ({ isActive, onComplete }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    // Generate 75 petals/confetti pieces
    const newPetals = Array.from({ length: 75 }).map((_, i) => {
      const isGold = Math.random() > 0.7; // 30% gold confetti, 70% red petals
      return {
        id: i,
        left: Math.random() * 100, // Random horizontal start (0 to 100vw)
        animationDuration: 3 + Math.random() * 3, // Fall between 3s and 6s
        animationDelay: Math.random() * 2, // Start falling anytime in first 2s
        size: isGold ? 8 + Math.random() * 8 : 15 + Math.random() * 15, // Confetti vs Petal size
        isGold,
        rotateStart: Math.random() * 360,
        rotateEnd: Math.random() * 360 + 360,
        swayAmount: 20 + Math.random() * 50
      };
    });

    setPetals(newPetals);

    // Unmount after 7 seconds
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="petal-rain-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`falling-element ${petal.isGold ? 'gold-confetti' : 'red-petal'}`}
          style={{
            left: `${petal.left}vw`,
            width: `${petal.size}px`,
            height: `${petal.isGold ? petal.size : petal.size * 1.2}px`,
            animation: `fall ${petal.animationDuration}s linear ${petal.animationDelay}s forwards, sway ${petal.animationDuration}s ease-in-out ${petal.animationDelay}s alternate infinite`,
            '--rotate-start': `${petal.rotateStart}deg`,
            '--rotate-end': `${petal.rotateEnd}deg`,
            '--sway': `${petal.swayAmount}px`
          }}
        />
      ))}
    </div>
  );
};

export default PetalRain;
