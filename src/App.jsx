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
const GlassSection = ({ children, delay = 0, style = {} }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.25, 1, 0.5, 1] }}
      className="glass-card"
      style={style}
    >
      {children}
    </motion.div>
  );
};

// Scroll-Reversible Animated Side Assets
const AnimatedSideAsset = ({ src, side, alt }) => {
  const isLeft = side === 'left';
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`side-asset ${isLeft ? 'side-asset-left' : 'side-asset-right'}`}
      initial={{ opacity: 0, x: isLeft ? -80 : 80, y: "-50%", rotate: isLeft ? -30 : 30, scale: 0.8 }}
      whileInView={{ opacity: 0.85, x: 0, y: "-50%", rotate: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

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
      <section className="content-section">
        <AnimatedSideAsset src={vectorPuffImg} side="left" alt="Puff Vector" />
        <AnimatedSideAsset src={vectorPaanImg} side="right" alt="Paan Vector" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <span className="gold-text">{t('vision_title')}</span>
        </motion.h2>
        <GlassSection style={{ textAlign: 'center', padding: '5rem 4rem' }}>
          <p style={{ fontSize: '1.4rem', lineHeight: '2', color: 'var(--text-secondary)', fontWeight: 300 }}>
            {t('vision_text')}
          </p>
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
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
            {t('protocol_text')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '3rem' }}>
            <div>
              <h3 style={{ color: 'var(--gold-base)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem' }}>Family</h3>
              <p style={{ fontSize: '1.3rem', color: '#fff' }}>{t('family_name')}</p>
            </div>
          </div>
        </GlassSection>
      </section>

      {/* Final Greeting */}
      <section className="content-section" style={{ minHeight: '40vh' }}>
        <AnimatedSideAsset src={vectorCokeImg} side="left" alt="Coke Vector" />
        <AnimatedSideAsset src={vectorCupImg} side="right" alt="Cup Vector" />
        <motion.h2 
          className="gold-text" 
          style={{ fontSize: '1.5rem', letterSpacing: '0.4em' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          {t('jai_dwarkadhish')}
        </motion.h2>
      </section>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/14072528045?text=${encodeURIComponent(t('whatsapp_message'))}`} target="_blank" rel="noopener noreferrer" className="wa-float">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--gold-base)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a>
      <a href={`https://wa.me/919376771377?text=${encodeURIComponent(t('whatsapp_message'))}`} target="_blank" rel="noopener noreferrer" className="wa-float left">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--gold-base)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a>
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
