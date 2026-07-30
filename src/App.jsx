import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom';
import Itinerary from './Itinerary';
import './i18n';
import './index.css';

// Assets
import creativeTeaImg from './assets/creative_tea.png';
import vectorPaanImg from './assets/vector_paan.png';
import vectorCupImg from './assets/vector_cup.png';
import vectorPuffImg from './assets/vector_puff.png';
import vectorCokeImg from './assets/vector_coke.png';
import peacockImg from './assets/peacock_feather.png';
import marigoldImg from './assets/marigold.png';

// Components
import OpeningCeremony from './components/OpeningCeremony';

const SEOUpdater = ({ currentLang, t }) => {
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.title = t('invitation_title');
  }, [currentLang, t]);
  return null;
};

// Subtle Floating Dust Particle Component
const FloatingDust = () => {
  const dustArray = Array.from({ length: 30 });
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  return (
    <motion.div style={{ y: yMove, position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} className="dust-container">
      {dustArray.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: Math.random() * 0.5 + 0.1, 
            scale: Math.random() * 0.5 + 0.5,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`
          }}
          animate={{
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100 - 20}vh`],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: 'var(--gold-base)',
            borderRadius: '50%',
            boxShadow: '0 0 10px var(--gold-base)'
          }}
        />
      ))}
    </motion.div>
  );
};

// Sleek Section Wrapper
const GlassSection = ({ children, delay = 0, style = {}, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      className={`glass-card ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Side Assets Disabled for Clean Luxury Aesthetic
const AnimatedSideAsset = () => null;

const InvitationContent = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  
  // Basic Parallax Hooks
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 25 });
  
  const bgY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const heroY = useTransform(smoothProgress, [0, 1], ['0%', '80%']);
  const heroScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const validLangs = ['en', 'hi', 'gu'];
    if (lang && validLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
      }
    } else if (!lang || lang === '') {
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
        setCurrentLang('en');
      }
    } else {
      navigate('/en', { replace: true });
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="app-container" ref={containerRef}>
      {/* 3D Animated Ribbon Cut Opening Ceremony */}
      <OpeningCeremony />
      
      {/* Clean Parallax Background Layer */}
      <div className="parallax-bg" />
      <motion.div className="parallax-pattern" style={{ y: bgY }} />
      <FloatingDust />
      
      <SEOUpdater i18n={i18n} currentLang={currentLang} t={t} />

      {/* Language Switcher */}
      <div className="lang-switcher-container">
        {['en', 'hi', 'gu'].map((lng) => (
          <button
            key={lng}
            className={`lang-btn ${currentLang === lng ? 'active' : ''}`}
            onClick={() => navigate(`/${lng}`)}
          >
            {lng === 'en' ? 'EN' : lng === 'hi' ? 'HI' : 'GU'}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="hero-content">
          <motion.div 
            className="hero-paan-wrapper"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: [-10, 10, -10] }}
            transition={{ 
              scale: { duration: 2, ease: "easeOut" },
              opacity: { duration: 2, ease: "easeOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          >
            <img src={creativeTeaImg} alt="Creative Tea Setup" className="hero-feast-img" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="gold-text"
          >
            {t('event_title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, delay: 1 }}
            style={{ fontSize: '1.2rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}
          >
            {t('date_label')}
          </motion.p>
        </motion.div>

        <motion.div className="scroll-indicator" style={{ opacity: heroOpacity }}>
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--gold-base)' }}>{t('scroll_text')}</p>
          <motion.div 
            className="scroll-line"
            animate={{ height: ['0px', '80px', '0px'], opacity: [0, 1, 0], y: [0, 20, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* The Vision Section */}
      <section className="content-section vision-section">
        <AnimatedSideAsset src={vectorPuffImg} side="left" alt="Puff Vector" />
        <AnimatedSideAsset src={vectorPaanImg} side="right" alt="Paan Vector" />
        
        <GlassSection className="vision-card">
          <div className="vision-quote-icon">“</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="vision-heading"
          >
            <span className="gold-text">{t('vision_title')}</span>
          </motion.h2>
          <div className="gold-divider-line" />
          <p className="vision-text">
            {t('vision_text')}
          </p>
          <div className="gold-divider-line bottom" />
        </GlassSection>
      </section>

      {/* Event Details */}
      <section className="content-section">
        <AnimatedSideAsset src={vectorCupImg} side="left" alt="Cup Vector" />
        <AnimatedSideAsset src={vectorCokeImg} side="right" alt="Coke Vector" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="gold-text">{t('program_title')}</span>
        </motion.h2>
        <GlassSection>
          <div className="details-grid">
            <div className="detail-item">
              <h3>{t('date_label_box')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('date_text') }} />
            </div>
            <div className="detail-item">
              <h3>{t('time_label_box')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('time_text') }} />
            </div>
            <div className="detail-item">
              <h3>{t('venue_label_box')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('venue_text') }} />
            </div>
          </div>
        </GlassSection>
      </section>

      {/* Protocol & RSVP */}
      <section className="content-section">
        <AnimatedSideAsset src={vectorPaanImg} side="left" alt="Paan Vector" />
        <AnimatedSideAsset src={vectorPuffImg} side="right" alt="Puff Vector" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="gold-text">{t('inviter_title')}</span>
        </motion.h2>
        <GlassSection style={{ textAlign: 'center' }}>
          <p className="protocol-text">
            {t('protocol_text')}
          </p>
          <div className="inviter-box">
            <h3 className="inviter-box-title">Family</h3>
            <p className="inviter-box-name">{t('family_name')}</p>
          </div>
        </GlassSection>
      </section>

      {/* Final Greeting */}
      <section className="content-section final-greeting-section">
        <AnimatedSideAsset src={vectorCokeImg} side="left" alt="Coke Vector" />
        <AnimatedSideAsset src={vectorCupImg} side="right" alt="Cup Vector" />
        <motion.h2 
          className="gold-text final-greeting-text" 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          {t('jai_dwarkadhish')}
        </motion.h2>
      </section>

    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitationContent />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/:lang" element={<InvitationContent />} />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
};

export default App;
