import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// Assets
import marigoldImg from './assets/marigold.png';
import mandalaImg from './assets/mandala.png';
import peacockFeatherImg from './assets/peacock_feather.png';
import toranImg from './assets/toran.gif';

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

const Itinerary = () => {
    // Set title
    useEffect(() => {
        const originalTitle = document.title;
        const originalOgImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
        const originalTwitterImage = document.querySelector('meta[property="twitter:image"]')?.getAttribute('content');
        const originalOgUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');

        document.title = "Itinerary - Divine Flag Hoisting Ceremony";

        // Update meta tags
        const updateMetaTag = (selector, content) => {
            let element = document.querySelector(selector);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                if (selector.startsWith('meta[property=')) {
                    element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
                } else if (selector.startsWith('meta[name=')) {
                    element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
                }
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        const imageUrl = window.location.origin + '/Itinerary.jpeg';
        const title = "Itinerary - Divine Flag Hoisting Ceremony";
        const description = "View the complete program schedule for the Divine Flag Hoisting Ceremony at Dwarkadhish Temple.";

        updateMetaTag('meta[property="og:image"]', imageUrl);
        updateMetaTag('meta[property="twitter:image"]', imageUrl);
        updateMetaTag('meta[property="og:url"]', window.location.href);

        updateMetaTag('meta[property="og:title"]', title);
        updateMetaTag('meta[property="twitter:title"]', title);
        updateMetaTag('meta[name="description"]', description);
        updateMetaTag('meta[property="og:description"]', description);
        updateMetaTag('meta[property="twitter:description"]', description);

        return () => {
            document.title = originalTitle;
            if (originalOgImage) updateMetaTag('meta[property="og:image"]', originalOgImage);
            if (originalTwitterImage) updateMetaTag('meta[property="twitter:image"]', originalTwitterImage);
            if (originalOgUrl) updateMetaTag('meta[property="og:url"]', originalOgUrl);
        };
    }, []);

    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const contentY = useTransform(smoothProgress, [0, 1], [0, -50]);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <div className="app-container" style={{ fontFamily: 'var(--font-main)' }}>
            {/* Fixed Background */}
            <div className="app-bg-fixed" />

            {/* Side Peacock Feathers */}
            <img src={peacockFeatherImg} className="peacock-side peacock-side-left" alt="" loading="lazy" decoding="async" />
            <img src={peacockFeatherImg} className="peacock-side peacock-side-right" alt="" loading="lazy" decoding="async" />

            {/* Rotating Background Mandala */}
            <img src={mandalaImg} className="mandala-bg" alt="" loading="lazy" decoding="async" />

            {/* Toran Decoration */}
            {/* <img src={toranImg} className="toran-header" alt="" loading="eager" decoding="async" /> */}

            <motion.div className="content-wrapper" style={{ y: contentY }}>

                <ScrollRevealSection className="parallax-section">
                    {/* Header */}
                    <motion.h1
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2.5rem',
                            color: 'var(--primary-color)',
                            textAlign: 'center',
                            marginTop: '2rem',
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-decorative)',
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        ITINERARY
                    </motion.h1>

                    <motion.div variants={itemVariants} className="divider" style={{ margin: '0 auto 0.5rem auto' }}></motion.div>

                    {/* Date 20/02/26 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="itinerary-card"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: 'clamp(1.2rem, 4vw, 2rem)',
                            borderRadius: '15px',
                            maxWidth: '800px',
                            width: '100%',
                            margin: '0 auto 2rem auto',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255, 215, 0, 0.1)'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{
                                color: 'var(--primary-color)',
                                fontSize: '1.8rem',
                                borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block',
                                fontFamily: 'var(--font-decorative)'
                            }}>
                                20 February 2026
                            </h2>
                        </div>

                        <div className="itinerary-list" style={{ textAlign: 'left', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Departure</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>4:30 am</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', marginTop: '3px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', flexShrink: 0 }} />
                                <span style={{ textAlign: 'left' }}>Breakfast on the way</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', marginTop: '3px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', flexShrink: 0 }} />
                                <span style={{ textAlign: 'left' }}>Check-in at Lemon Tree Hotel</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', marginTop: '3px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', flexShrink: 0 }} />
                                <span style={{ textAlign: 'left' }}>Lunch</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Leave for Rukmani Temple & Bet Dwarka</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>4:30 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Dwarkadhish Darshan</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>8:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'flex-start' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', marginTop: '3px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))', flexShrink: 0 }} />
                                <span style={{ textAlign: 'left' }}>Dinner at Lemon Tree</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Date 21/02/26 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="itinerary-card"
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: 'clamp(1.2rem, 4vw, 2rem)',
                            borderRadius: '15px',
                            maxWidth: '800px',
                            width: '100%',
                            margin: '0 auto 2rem auto',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            border: '1px solid rgba(255, 215, 0, 0.1)'
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{
                                color: 'var(--primary-color)',
                                fontSize: '1.8rem',
                                borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
                                paddingBottom: '0.5rem',
                                display: 'inline-block',
                                fontFamily: 'var(--font-decorative)'
                            }}>
                                21 February 2026
                            </h2>
                        </div>

                        <div className="itinerary-list" style={{ textAlign: 'left', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Breakfast</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>8:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Leave for Dwarka Darshan</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>10:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Pooja at Sharda Peeth</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>11:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Lunch at Sharda Peeth</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>12:30 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Varghodo</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>3:30 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Dhwaja</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>5:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Nageshwar Temple</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>7:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span style={{ textAlign: 'left', flex: 1, paddingRight: '0.8rem' }}>Dinner at Lemon Tree</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap', fontSize: '0.9em', marginTop: '3px' }}>8:00 pm</span>
                            </p>
                        </div>
                    </motion.div>
                </ScrollRevealSection>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '2.5rem' }}
                >
                    <motion.a
                        href="/en"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
                            background: "linear-gradient(45deg, #FFC107, #FFD700)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            display: 'inline-block',
                            background: 'linear-gradient(45deg, #FFD700, #FFC107)',
                            color: '#2b0000',
                            textDecoration: 'none',
                            padding: '0.9rem 2.8rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255, 215, 0, 0.8)',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-main)',
                            textTransform: 'uppercase'
                        }}
                    >
                        VIEW INVITATION
                    </motion.a>
                </motion.div>

                {/* Footer Credit */}
                <motion.div
                    className="footer-credit"
                    initial={{ opacity: 0.3 }}
                    whileInView={{ opacity: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    style={{
                        textAlign: 'center',
                        padding: '0.5rem 0',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        color: 'var(--text-color)',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        width: '100%',
                        fontWeight: 500
                    }}
                >
                    <a
                        href="https://chwebtech.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <span>Designed by: Dharmi Patel</span>
                        <span style={{ margin: '0 0.2rem' }}>|</span>
                        <span style={{ fontWeight: 600 }}>CH Web Technologies</span>
                    </a>
                </motion.div>
            </motion.div >
        </div >
    );
};

export default Itinerary;
