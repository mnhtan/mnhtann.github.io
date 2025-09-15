import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Smooth Scroll Context
interface SmoothScrollContextType {
    scrollProgress: number;
    activeSection: string;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
    scrollProgress: 0,
    activeSection: 'home'
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

// Scroll Progress Bar
export const ScrollProgress: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-1 bg-navy-800/20 z-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-water-500 to-water-600"
                style={{ transformOrigin: 'left' }}
            />
        </motion.div>
    );
};

// Floating Navigation Dots
export const FloatingNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);

    const sections = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'education', label: 'Education', icon: '🎓' },
        { id: 'contact', label: 'Contact', icon: '📧' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Show/hide navigation based on scroll position
            setIsVisible(scrollY > windowHeight * 0.5);

            // Determine active section
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
        >
            <div className="flex flex-col gap-3">
                {sections.map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${activeSection === section.id
                                ? 'bg-water-500 text-white shadow-lg scale-110'
                                : 'bg-white/10 backdrop-blur-md text-water-400 hover:bg-water-500/20'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={section.label}
                    >
                        <span className="text-lg">{section.icon}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

// Main Smooth Scroll Wrapper
interface SmoothScrollProps {
    children: ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        const handleScroll = () => {
            updateScrollProgress();

            // Determine active section
            const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <SmoothScrollContext.Provider value={{ scrollProgress, activeSection }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScroll;