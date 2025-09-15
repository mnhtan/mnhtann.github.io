import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { socialLinks } = portfolioData;
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const getSocialIcon = (iconName: string) => {
        switch (iconName) {
            case 'github':
                return Github;
            case 'link':
                return ExternalLink;
            default:
                return ExternalLink;
        }
    };

    return (
        <footer className="bg-navy-900 text-water-50 relative overflow-hidden">
            <div className="container-custom">
                <div className="py-12">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Logo & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-4 flex items-center gap-2">
                                <Waves className="corps-logo" size={24} />
                                {t('footer.name')}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {t('footer.description')}
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h4>
                            <div className="space-y-2">
                                {[
                                    { name: t('footer.home'), href: '#home' },
                                    { name: t('footer.about'), href: '#about' },
                                    { name: t('footer.skills'), href: '#skills' },
                                    { name: t('footer.projects'), href: '#projects' },
                                    { name: t('footer.contact'), href: '#contact' }
                                ].map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            const element = document.querySelector(link.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="block text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center md:text-right"
                        >
                            <h4 className="text-lg font-semibold mb-4">{t('footer.connect')}</h4>
                            <div className="flex justify-center md:justify-end gap-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = getSocialIcon(social.icon);
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                        >
                                            <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full h-px bg-gray-800 my-8"
                    />

                    {/* Bottom Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4"
                    >
                        <div className="text-gray-400 text-sm">
                            {t('footer.rights')}
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>{t('footer.built')}</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>
        </footer>
    );
};

export default Footer;
