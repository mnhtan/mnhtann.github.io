import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import { FadeInUp, FadeInLeft, FadeInRight, ScaleIn } from './ScrollAnimations';
import FloatingElements from './FloatingElements';

const About: React.FC = () => {
    const { personal, contact } = portfolioData;
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: Mail,
            label: t('contact.email_label'),
            value: contact.email,
            href: `mailto:${contact.email}`
        },
        {
            icon: Phone,
            label: t('contact.phone_label'),
            value: contact.phone,
            href: `tel:${contact.phone}`
        },
        {
            icon: MapPin,
            label: t('contact.location_label'),
            value: t('contact.location'),
            href: '#'
        },
        {
            icon: ExternalLink,
            label: 'Linktree',
            value: 'linktr.ee/javis_mtan',
            href: contact.linktree
        }
    ];

    return (
        <section id="about" className="section-padding bg-water-50/50 dark:bg-navy-900/50 relative overflow-hidden">
            {/* Floating Elements */}
            <FloatingElements
                count={10}
                intensity="low"
                colors={['rgba(59, 130, 246, 0.1)', 'rgba(30, 58, 95, 0.1)']}
                types={['circle', 'square']}
            />

            <div className="container-custom relative z-10">
                <FadeInUp className="text-center mb-16">
                    <h2 className="section-title">
                        <Waves className="plane-icon" size={32} />
                        {t('about.title')}
                    </h2>
                    <div className="section-divider"></div>
                </FadeInUp>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* About Content */}
                    <FadeInLeft>
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)'
                            }}
                            className="card-3d p-6 mb-6 relative overflow-hidden"
                        >
                            {/* Animated background gradient */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-water-400/5 to-navy-600/5"
                                animate={{
                                    background: [
                                        'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 95, 0.05))',
                                        'linear-gradient(45deg, rgba(30, 58, 95, 0.05), rgba(59, 130, 246, 0.05))',
                                        'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(30, 58, 95, 0.05))'
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Waves className="plane-icon" size={24} />
                                    </motion.div>
                                    {personal.name}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {t('about.description')}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="flex items-center gap-3 card-3d p-3 rounded-lg"
                                whileHover={{ scale: 1.02, x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="w-3 h-3 bg-primary-600 rounded-full glow-effect"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                ></motion.div>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {t('about.experience.ai')}
                                </span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 card-3d p-3 rounded-lg"
                                whileHover={{ scale: 1.02, x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="w-3 h-3 bg-secondary-500 rounded-full glow-effect"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                ></motion.div>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {t('about.experience.cv')}
                                </span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 card-3d p-3 rounded-lg"
                                whileHover={{ scale: 1.02, x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="w-3 h-3 bg-accent-500 rounded-full glow-effect"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                ></motion.div>
                                <span className="text-gray-700 dark:text-gray-300">
                                    {t('about.experience.learning')}
                                </span>
                            </motion.div>
                        </motion.div>
                    </FadeInLeft>

                    {/* Contact Information */}
                    <FadeInRight>
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(30, 58, 95, 0.1)'
                            }}
                            className="card p-8 relative overflow-hidden"
                        >
                            {/* Animated background pattern */}
                            <motion.div
                                className="absolute inset-0 opacity-5"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                                style={{
                                    background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                                    backgroundSize: '200% 200%'
                                }}
                            />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    {t('contact.title')}
                                </h3>

                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            target={info.label === 'Linktree' ? '_blank' : undefined}
                                            rel={info.label === 'Linktree' ? 'noopener noreferrer' : undefined}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                                                <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                    {info.label}
                                                </p>
                                                <p className="text-gray-900 dark:text-white font-medium">
                                                    {info.value}
                                                </p>
                                            </div>
                                            {info.label === 'Linktree' && (
                                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
                                            )}
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Quick Stats */}
                                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        {t('about.quick_stats')}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                                            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.completed_projects')}</div>
                                        </div>
                                        <div className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                                            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('about.skills')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </FadeInRight>
                </div>
            </div>
        </section>
    );
};

export default About;
