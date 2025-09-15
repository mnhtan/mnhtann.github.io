import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, ExternalLink, CheckCircle, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import WaterWaves from './WaterWaves';

const Contact: React.FC = () => {
    const { contact, socialLinks } = portfolioData;
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

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
        <section id="contact" className="section-padding bg-water-50/50 dark:bg-navy-900/50 relative overflow-hidden">
            {/* Enhanced Water Effects */}
            <WaterWaves intensity="low" className="opacity-20" />

            {/* Floating Water Droplets */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="water-droplet top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
                <div className="water-droplet top-1/3 right-1/3" style={{ animationDelay: '1s' }}></div>
                <div className="water-droplet bottom-1/4 left-1/3" style={{ animationDelay: '2s' }}></div>
                <div className="water-droplet bottom-1/3 right-1/4" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <Waves className="plane-icon" size={32} />
                        {t('contact.title')}
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="section-subtitle">
                        {t('contact.description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="card p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('contact.send_message')}
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('contact.message_sent')}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {t('contact.thank_you')}
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.full_name')} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                                        placeholder={t('contact.full_name_placeholder')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.email')} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                                        placeholder={t('contact.email_placeholder')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.message')} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300 resize-none"
                                        placeholder={t('contact.message_placeholder')}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            {t('contact.sending')}
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            {t('contact.send')}
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Direct Contact */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('contact.contact_info')}
                            </h3>

                            <div className="space-y-6">
                                <motion.a
                                    href={`mailto:${contact.email}`}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                                        <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            Email
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-medium">
                                            {contact.email}
                                        </p>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href={`tel:${contact.phone}`}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors duration-300">
                                        <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                            {t('contact.phone_number')}
                                        </p>
                                        <p className="text-gray-900 dark:text-white font-medium">
                                            {contact.phone}
                                        </p>
                                    </div>
                                </motion.a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('contact.social_networks')}
                            </h3>

                            <div className="space-y-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = getSocialIcon(social.icon);
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-300 group"
                                        >
                                            <div className="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-lg flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-dark-600 transition-colors duration-300">
                                                <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-900 dark:text-white font-medium">
                                                    {social.name}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Response */}
                        <div className="card p-8 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800">
                            <h3 className="text-xl font-bold text-primary-900 dark:text-primary-100 mb-4">
                                {t('contact.quick_response')}
                            </h3>
                            <p className="text-primary-800 dark:text-primary-200 mb-4">
                                {t('contact.response_time')}
                            </p>
                            <motion.a
                                href={`tel:${contact.phone}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                            >
                                <Send className="w-4 h-4" />
                                {t('contact.call_now')}
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
