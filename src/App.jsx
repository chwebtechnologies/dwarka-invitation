import React, { useEffect, useState, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

import { Routes, Route, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import './i18n';
import './index.css';

// Assets
import marigoldImg from './assets/marigold.png';
import templeImg from './assets/temple.webp';
import mandalaImg from './assets/mandala.png';
import peacockFeatherImg from './assets/peacock_feather.png';
import ganeshaImg from './assets/ganesha.jpg';
import dwarkadhishImg from './assets/dwarkadhish.jpg';
import toranImg from './assets/toran.gif';
import pujaPng from './assets/pooja.png';
import shobhayatraPng from './assets/rathyatra.png';
import dinnerPng from './assets/dinner.png';
import flagHostingPng from './assets/flaghosting.png';

const ScrollRevealSection = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, -30]);

  const smoothOpacity = useSpring(opacity, { stiffness: 60, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <motion.section
      ref={ref}
      className={className}
      style={{
        opacity: smoothOpacity,
        scale: smoothScale,
        y: smoothY,
      }}
    >
      {children}
    </motion.section>
  );
};

const SEOUpdater = ({ currentLang, t }) => {
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.title = t('invitation_title');

    const updateMeta = (selector, content) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    updateMeta('meta[name="description"]', t('description'));
    updateMeta('meta[property="og:title"]', t('invitation_title'));
    updateMeta('meta[property="og:description"]', t('description'));
    updateMeta('meta[property="og:url"]', window.location.href);
    updateMeta('meta[property="og:image"]', 'https://invitation.chwebtech.in/preview.jpg');
    updateMeta('meta[property="twitter:title"]', t('invitation_title'));
    updateMeta('meta[property="twitter:description"]', t('description'));
    updateMeta('meta[property="twitter:image"]', 'https://invitation.chwebtech.in/preview.jpg');

    // Canonical Link
    let linkRelCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkRelCanonical) {
      linkRelCanonical = document.createElement('link');
      linkRelCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkRelCanonical);
    }
    linkRelCanonical.setAttribute('href', window.location.href);

  }, [currentLang, t]);

  return null;
};

const InvitationContent = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const validLangs = ['en', 'hi', 'gu'];
    if (lang && validLangs.includes(lang)) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
      }
    } else if (!lang || lang === '') {
      // Default to gujarati if no language is specified
      if (i18n.language !== 'gu') {
        i18n.changeLanguage('gu');
        setCurrentLang('gu');
      }
    } else {
      // Invalid language in URL, redirect to default
      navigate('/gu', { replace: true });
    }
  }, [lang, i18n, navigate]);

  const changeLanguage = (lng) => {
    navigate(`/${lng}`);
  };

  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '20%']);
  const marigoldRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const contentY = useTransform(smoothProgress, [0, 1], [0, -50]);

  // Language mapping for fonts
  const getFontFamily = () => {
    if (currentLang === 'hi') return 'var(--font-hindi)';
    if (currentLang === 'gu') return 'var(--font-gujarati)';
    return 'var(--font-main)';
  };

  const scrollRevealVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 40,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className={`app-container lang-${currentLang}`} style={{ fontFamily: getFontFamily() }}>
      {/* Fixed Background for performance */}
      <div className="app-bg-fixed" />

      {/* Side Peacock Feathers */}
      <img src={peacockFeatherImg} className="peacock-side peacock-side-left" alt="" loading="lazy" decoding="async" />
      <img src={peacockFeatherImg} className="peacock-side peacock-side-right" alt="" loading="lazy" decoding="async" />

      {/* Rotating Background Mandala */}
      <img src={mandalaImg} className="mandala-bg" alt="" loading="lazy" decoding="async" />

      {/* Toran Decoration - Mobile Only (Visible at start) */}
      <img src={toranImg} className="toran-header" alt="" loading="eager" decoding="async" />

      {/* Language Switcher */}
      <div className="language-switcher-wrapper">
        <motion.div
          className="language-switcher"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.9,
            pointerEvents: isVisible ? 'auto' : 'none'
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {['en', 'hi', 'gu'].map((lang) => (
            <button
              key={lang}
              className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
              onClick={() => changeLanguage(lang)}
            >
              {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिंदी' : 'ગુજરાતી'}
            </button>
          ))}
        </motion.div>
      </div>

      {/* SEO Logic */}
      <SEOUpdater
        i18n={i18n}
        currentLang={currentLang}
        t={t}
      />

      {/* Decorative Idols (Floating) */}
      {/* <motion.img
        src={idolImg}
        className="idol-side idol-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={idolImg}
        className="idol-side idol-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1 }}
      /> */}

      <motion.div className="content-wrapper" style={{ y: contentY }}>

        <ScrollRevealSection className="parallax-section hero-section">
          <motion.div variants={itemVariants} className="hero-gods-layout">
            <div className="god-column">
              <div className="god-img-wrapper">
                <img src={ganeshaImg} alt="Ganesha" className="god-img" loading="eager" fetchpriority="high" decoding="async" />
              </div>
              <p className="invocation">{t('ganesh_namah')}</p>
            </div>

            <span className="dot-separator">•</span>

            <div className="god-column">
              <div className="god-img-wrapper">
                <img src={dwarkadhishImg} alt="Dwarkadhish" className="god-img" loading="eager" fetchpriority="high" decoding="async" />
              </div>
              <p className="invocation">{t('jai_dwarkadhish')}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="marigold-container" style={{ rotate: marigoldRotate }}>
            <img src={marigoldImg} alt="Marigold" className="marigold-img" loading="lazy" decoding="async" />
          </motion.div>

          <motion.h1 variants={itemVariants}>{t('event_title')}</motion.h1>

          <motion.div variants={itemVariants}>
            <img src={peacockFeatherImg} className="peacock-feather" alt="Peacock Feather" loading="lazy" decoding="async" />
          </motion.div>

          <motion.div variants={itemVariants} className="divider"></motion.div>

          <motion.h2 variants={itemVariants} className="date-display">{t('date_label')}</motion.h2>
        </ScrollRevealSection>

        {/* Description Section */}
        <ScrollRevealSection className="parallax-section">
          <motion.div
            variants={itemVariants}
            className="main-description"
            dangerouslySetInnerHTML={{ __html: t('description') }}
          />
        </ScrollRevealSection>

        {/* Program Section */}
        <ScrollRevealSection className="parallax-section">
          <motion.h2 variants={itemVariants} className="section-title">{t('program_title')}</motion.h2>
          <motion.div variants={itemVariants} className="divider"></motion.div>

          <div className="program-grid">
            {[
              { label: 'puja_label', time: 'puja_time', location: 'puja_location', icon: pujaPng },
              { label: 'shobhayatra_label', time: 'shobhayatra_time', location: 'shobhayatra_location', icon: shobhayatraPng },
              { label: 'prasadi_label', time: 'prasadi_time', icon: dinnerPng },
              { label: 'aarohan_label', time: 'aarohan_time', location: 'aarohan_location', icon: flagHostingPng },
              { label: 'prasadi2_label', time: 'prasadi2_time', icon: dinnerPng }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="program-item"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              >
                <img src={item.icon} alt="" className="program-icon left-icon" loading="lazy" />
                <div className="program-content">
                  <h3>{t(item.label)}</h3>
                  <span className="program-time">{t(item.time)}</span>
                  {item.location && <span className="program-location" style={{ display: 'block', fontSize: '0.9em', marginTop: '0.2rem', opacity: 0.9, whiteSpace: 'pre-line' }}>{t(item.location)}</span>}
                </div>
                <img src={item.icon} alt="" className="program-icon right-icon" loading="lazy" />
              </motion.div>
            ))
            }
          </div>
        </ScrollRevealSection>

        {/* Inviter Section */}
        <ScrollRevealSection className="parallax-section">
          <motion.h2 variants={itemVariants} className="section-title">{t('inviter_title')}</motion.h2>
          <motion.div variants={itemVariants} className="divider"></motion.div>
          <motion.div variants={itemVariants} className="inviter-names-container">
            {(() => {
              const namesData = t('inviter_names', { returnObjects: true });

              if (Array.isArray(namesData)) {
                return namesData.map((item, idx) => {
                  if (item.type === 'header') {
                    return <div key={idx} className="inviter-header">{item.text}</div>;
                  }
                  if (item.type === 'header-small') {
                    return <div key={idx} className="inviter-header-small">{item.text}</div>;
                  }
                  if (item.type === 'couple') {
                    return <div key={idx} className="inviter-couple">{item.text}</div>;
                  }
                  if (item.type === 'couple-highlight') {
                    return <div key={idx} className="inviter-couple-highlight">{item.text}</div>;
                  }
                  if (item.type === 'kids') {
                    return <div key={idx} className="inviter-kids">{item.text}</div>;
                  }
                  if (item.type === 'spacing') {
                    return <div key={idx} className="inviter-spacing"></div>;
                  }
                  return null;
                });
              }

              // Fallback for legacy string format
              return typeof namesData === 'string' ? namesData.split('\n').map((line, idx) => {
                const names = line.split('|');
                return (
                  <div key={idx} className={names.length > 1 ? "inviter-row" : "inviter-single-line"}>
                    {names.map((name, i) => (
                      <span key={i} className="inviter-name">{name.trim()}</span>
                    ))}
                  </div>
                );
              }) : null;
            })()}
          </motion.div>
          <motion.div
            className="family-name"
            variants={itemVariants}
          >
            {t('family_name')}
          </motion.div>
        </ScrollRevealSection>

        {/* Map Section */}
        <ScrollRevealSection className="parallax-section">
          <motion.h2 variants={itemVariants} className="section-title">{t('location_title')}</motion.h2>
          <motion.div variants={itemVariants} className="divider"></motion.div>

          <motion.p variants={itemVariants} className="address">{t('location_address')}</motion.p>

          <motion.div variants={itemVariants} className="map-grid">
            <motion.div
              className="map-card"
              whileHover={{ scale: 1.02 }}
            >
              <h3><img src={marigoldImg} className="map-marigold-icon" alt="" loading="lazy" decoding="async" /> {t('venue_location_btn')} <img src={marigoldImg} className="map-marigold-icon" alt="" loading="lazy" decoding="async" /></h3>
              <div className="map-container relative">
                <iframe
                  title="Venue Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8925203237072!2d68.9689805!3d22.2441564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569dd72b9181d9%3A0x3965c9302c036bd9!2sLemon%20Tree%20Premier%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1770919015120!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              className="map-card"
              whileHover={{ scale: 1.02 }}
            >
              <h3><img src={marigoldImg} className="map-marigold-icon" alt="" loading="lazy" decoding="async" /> {t('temple_location_btn')}<img src={marigoldImg} className="map-marigold-icon" alt="" loading="lazy" decoding="async" /></h3>
              <div className="map-container relative">
                <iframe
                  title="Dwarkadhish Temple"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.06319135929!2d68.9647832751165!3d22.23768107973162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c3ab7c4e9e5%3A0x31b7c3111df48f4!2sDwarkadhish%20Temple!5e0!3m2!1sen!2sin!4v1770658909593!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <img
              src={templeImg}
              className="temple-img"
              alt="Temple"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </ScrollRevealSection>

        {/* Final Jay Dwarkadhish Chant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h1
            style={{
              margin: '0.5rem 0 0.2rem 0', // Very minimal spacing
              fontSize: '1.5rem', // Smaller
              textShadow: '0 2px 10px rgba(197, 160, 89, 0.3)',
              fontFamily: 'var(--font-decorative)'
            }}
          >
            {t('jai_dwarkadhish')}
          </h1>
        </motion.div>

        {/* Footer Credit */}
        <motion.div
          className="footer-credit"
          initial={{ opacity: 0.4, scale: 1 }}
          whileInView={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.8, scale: 1.02, color: 'var(--primary-color)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          style={{
            textAlign: 'center',
            padding: '0.2rem',
            marginTop: '0',
            marginBottom: '0.2rem',
            color: 'var(--text-color)',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(8px, 2.5vw, 11px)', // Smaller size
            cursor: 'pointer',
            width: '100%',
            overflow: 'visible'
          }}
        >
          <a
            href="https://chwebtech.in/#team"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            <span style={{ fontSize: 'inherit' }}>Designed by: Dharmi Patel | Developed By: Harshit | </span>
          </a>
          <a
            href="https://chwebtech.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            CH Web Technologies
          </a>
        </motion.div>

      </motion.div>

      {/* Floating WhatsApp Icon */}
      <motion.a
        href={`https://wa.me/14072528045?text=${encodeURIComponent(t('whatsapp_message'))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <svg
          viewBox="0 0 24 24"
          width="35"
          height="35"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>

      {/* Second Floating WhatsApp Icon (Left Side) */}
      <motion.a
        href={`https://wa.me/919376771377?text=${encodeURIComponent(t('whatsapp_message'))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float left-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        <svg
          viewBox="0 0 24 24"
          width="35"
          height="35"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div >
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InvitationContent />} />
      <Route path="/:lang" element={<InvitationContent />} />
      <Route path="*" element={<Navigate to="/gu" replace />} />
    </Routes>
  );
};

export default App;
