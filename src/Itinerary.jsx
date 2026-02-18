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

        const imageUrl = window.location.origin + '/ITINERARY.jpeg';
        updateMetaTag('meta[property="og:image"]', imageUrl);
        updateMetaTag('meta[property="twitter:image"]', imageUrl);
        updateMetaTag('meta[property="og:url"]', window.location.href);

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
                            padding: '2rem',
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

                        <div className="itinerary-list" style={{ textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Departure</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>4:30 am</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' }} />
                                <span>Breakfast on the way</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' }} />
                                <span>Check-in at Lemon Tree Hotel</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' }} />
                                <span>Lunch</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span style={{ textAlign: 'left' }}>Leave for Rukmani Temple & Bet Dwarka</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>4:30 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Dwarkadhish Darshan</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>8:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={peacockFeatherImg} alt="" style={{ width: '24px', marginRight: '8px', transform: 'rotate(15deg)', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))' }} />
                                <span>Dinner at Lemon Tree</span>
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
                            padding: '2rem',
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

                        <div className="itinerary-list" style={{ textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Breakfast</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>8:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Leave for Dwarka Darshan</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>10:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Pooja at Sharda Peeth</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>11:00 am</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Lunch at Sharda Peeth</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>12:30 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Varghodo</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>3:30 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Dhwaja</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>5:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                                <span>Nageshwar Temple</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>7:00 pm</span>
                            </p>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Dinner at Lemon Tree</span>
                                <span style={{ color: 'var(--primary-color)', whiteSpace: 'nowrap' }}>8:00 pm</span>
                            </p>
                        </div>
                    </motion.div>
                </ScrollRevealSection>

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
                        marginTop: '2rem',
                        marginBottom: '2rem',
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
            </motion.div >
        </div >
    );
};

export default Itinerary;
