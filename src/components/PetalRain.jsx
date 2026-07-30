import React, { useEffect, useState } from 'react';

const PetalRain = ({ isActive, onComplete }) => {
  const [petals, setPetals] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setPetals([]);
      setVisible(false);
      return;
    }

    // Generate 90 petals/confetti pieces for 4-second burst
    const newPetals = Array.from({ length: 90 }).map((_, i) => {
      const isGold = Math.random() > 0.6; // 40% gold confetti, 60% red petals
      return {
        id: i,
        left: Math.random() * 100, // Random horizontal start (0 to 100vw)
        animationDuration: 2.5 + Math.random() * 2, // Fast fall speed between 2.5s and 4.5s
        animationDelay: Math.random() * 1.2, // Staggered start in first 1.2 seconds
        size: isGold ? 8 + Math.random() * 8 : 14 + Math.random() * 16,
        isGold,
        rotateStart: Math.random() * 360,
        rotateEnd: Math.random() * 360 + 360,
        swayAmount: 20 + Math.random() * 50
      };
    });

    setPetals(newPetals);
    setVisible(true);

    // Stop shower completely after 4 seconds (4000ms)
    const timer = setTimeout(() => {
      setVisible(false);
      setPetals([]);
      if (onComplete) onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isActive, onComplete]);

  if (!isActive || !visible) return null;

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
