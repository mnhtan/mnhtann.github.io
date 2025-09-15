import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Waves, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.education'), href: '#education' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const toggleLanguage = () => {
        setLanguage(language === 'vi' ? 'en' : 'vi');
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glassmorphism-nav"
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with Wave Icon */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 text-xl font-bold"
                    >
                        <Waves className="text-water-500" size={24} />
                        <span className="text-navy-800 dark:text-water-50 gradient-text">
                            PMT
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-navy-700 dark:text-water-200 hover:text-water-500 dark:hover:text-water-400 font-medium transition-colors duration-600 ripple-effect px-4 py-2 rounded-lg"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Theme Toggle, Language Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Language Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleLanguage}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-300"
                            title={t('header.switch_language')}
                        >
                            <Languages size={20} />
                        </motion.button>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-300"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-300"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-gray-200 dark:border-dark-700"
                    >
                        <div className="py-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors duration-300"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
};

export default Header;
