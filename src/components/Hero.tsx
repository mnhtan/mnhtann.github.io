import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown, Waves, Droplets } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import WaterWaves from './WaterWaves';
import FloatingElements, { WaterDroplets } from './FloatingElements';
import { FadeInUp, FadeInLeft, FadeInRight, ParallaxElement } from './ScrollAnimations';
import Avatar from './Avatar';

const Hero: React.FC = () => {
    const { personal, contact } = portfolioData;
    const { t, language } = useLanguage();

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 relative overflow-hidden">
            {/* Enhanced Water Waves Background */}
            <WaterWaves intensity="medium" className="opacity-30" />

            {/* Enhanced Floating Elements */}
            <WaterDroplets count={25} />
            <FloatingElements
                count={15}
                intensity="low"
                colors={['rgba(30, 58, 95, 0.1)', 'rgba(153, 27, 27, 0.1)']}
                types={['square', 'triangle']}
            />

            {/* Floating Water Droplets */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="water-droplet top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
                <div className="water-droplet top-1/3 right-1/3" style={{ animationDelay: '1s' }}></div>
                <div className="water-droplet bottom-1/4 left-1/3" style={{ animationDelay: '2s' }}></div>
                <div className="water-droplet bottom-1/3 right-1/4" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <FadeInLeft className="text-center lg:text-left">
                        <FadeInUp delay={0.2} className="mb-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-navy-800 dark:text-water-50 mb-4">
                                {t('hero.greeting')}{' '}
                                <span className="gradient-text">{personal.name}</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl text-water-500 dark:text-water-400 font-semibold mb-6">
                                {personal.title}
                            </h2>
                        </FadeInUp>

                        <FadeInUp delay={0.4}>
                            <p className="text-lg text-navy-600 dark:text-water-200 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {t('about.intro')}
                            </p>
                        </FadeInUp>

                        <FadeInUp delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-primary flex items-center justify-center gap-2 glow-effect"
                                    onClick={async () => {
                                        try {
                                            const url = personal.cvUrl || '/cv/PhanMinhTan-CV.pdf';
                                            const res = await fetch(url, { method: 'HEAD' });
                                            if (res.ok) {
                                                window.open(url, '_blank');
                                            } else {
                                                alert('Xin lỗi, hiện chưa tìm thấy file CV. Vui lòng thử lại sau.');
                                            }
                                        } catch (e) {
                                            alert('Xin lỗi, hiện chưa tìm thấy file CV. Vui lòng thử lại sau.');
                                        }
                                    }}
                                >
                                    <Download size={20} />
                                    {t('hero.download_cv')}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(30, 58, 95, 0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToContact}
                                    className="btn-secondary flex items-center justify-center gap-2"
                                >
                                    <Mail size={20} />
                                    {t('Contact')}
                                </motion.button>
                            </div>
                        </FadeInUp>

                        {/* Contact Info */}
                        <FadeInUp delay={0.8}>
                            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600 dark:text-gray-400">
                                <motion.a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    📧 {contact.email}
                                </motion.a>
                                <motion.a
                                    href={`tel:${contact.phone}`}
                                    className="flex items-center gap-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    📱 {contact.phone}
                                </motion.a>
                            </div>
                        </FadeInUp>
                    </FadeInLeft>

                    {/* Right Content - Avatar with Enhanced 3D Effects */}
                    <FadeInRight className="flex justify-center lg:justify-end relative">
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5,
                                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                            }}
                            className="relative cursor-glow"
                            style={{ perspective: '1000px' }}
                        >
                            <motion.div
                                className="w-80 h-80 rounded-full bg-gradient-to-br from-water-400 to-navy-600 p-1 card-3d"
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(59, 130, 246, 0.3)',
                                        '0 0 40px rgba(59, 130, 246, 0.5)',
                                        '0 0 20px rgba(59, 130, 246, 0.3)'
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="w-full h-full rounded-full bg-white dark:bg-navy-800 p-2">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-water-50 to-navy-100 dark:from-navy-700 dark:to-navy-900 flex items-center justify-center relative overflow-hidden">
                                        {/* Animated background pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-water-400 to-transparent rounded-full"></div>
                                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-navy-600 to-transparent rounded-full"></div>
                                        </div>

                                        <div className="text-center relative z-10">
                                            <motion.div
                                                className="mb-2"
                                                animate={{
                                                    rotate: [0, 5, -5, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            >
                                                <Avatar
                                                    src="/images/profile-photo.jpg"
                                                    alt="Phan Minh Tân"
                                                    fallback="👨‍💻"
                                                    size="2xl"
                                                    className="relative"
                                                />
                                            </motion.div>
                                            <motion.p
                                                className="text-sm text-navy-600 dark:text-water-300 font-medium"
                                                animate={{ opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                Data Science Developer
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 3D Floating Wave Animation */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <motion.div
                                    className="absolute top-1/4 left-1/4"
                                    animate={{
                                        x: [0, 200, 0],
                                        y: [0, -50, 0],
                                        rotate: [0, 360, 0],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Waves className="text-water-500 w-8 h-8" />
                                </motion.div>

                                <motion.div
                                    className="absolute top-3/4 right-1/4"
                                    animate={{
                                        x: [0, -150, 0],
                                        y: [0, 30, 0],
                                        rotate: [0, -180, 0],
                                        scale: [1, 0.8, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                >
                                    <Droplets className="text-water-400 w-6 h-6" />
                                </motion.div>

                                <motion.div
                                    className="absolute top-1/2 right-1/3"
                                    animate={{
                                        x: [0, 80, 0],
                                        y: [0, -40, 0],
                                        rotate: [0, 180, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                >
                                    <Waves className="text-water-300 w-5 h-5" />
                                </motion.div>
                            </motion.div>

                            {/* Floating Elements with 3D rotation */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotateX: [0, 10, 0],
                                    rotateY: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full opacity-20"
                                style={{ transformStyle: 'preserve-3d' }}
                            />
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    rotateX: [0, -10, 0],
                                    rotateY: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full opacity-20"
                                style={{ transformStyle: 'preserve-3d' }}
                            />
                        </motion.div>
                    </FadeInRight>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
                >
                    <motion.button
                        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-water-600 dark:hover:text-water-400 transition-colors group relative p-4"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* Glowing background */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-water-400/20 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />

                        <span className="text-sm font-medium relative z-10">{t('hero.scroll_down')}</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="relative z-10"
                        >
                            <ChevronDown
                                size={24}
                                className="group-hover:text-water-600 dark:group-hover:text-water-400 transition-colors"
                            />
                        </motion.div>

                        {/* Ripple effect */}
                        <motion.div
                            className="absolute inset-y-2 inset-x-0 rounded-full border-2 border-water-400/30"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
