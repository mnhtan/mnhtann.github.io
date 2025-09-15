import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Code, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
    const { education } = portfolioData;
    const { t } = useLanguage();

    return (
        <section id="education" className="section-padding bg-water-50/30 dark:bg-navy-900/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <Waves className="plane-icon" size={32} />
                        {t('education.title')}
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="section-subtitle">
                        {t('education.description')}
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="card p-8 relative card-3d"
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

                        {/* Education Item */}
                        <div className="relative pl-16">
                            {/* Timeline Dot */}
                            <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800"></div>

                            {/* Content */}
                            <div className="space-y-6">
                                {/* Header */}
                                <div className="flex items-start justify-between flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {t('education.degree')}
                                        </h3>
                                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                                            {t('education.school')}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{t('education.period')}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <Award className="w-4 h-4" />
                                            <span>{t('education.gpa')}: {education.gpa}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                    <MapPin className="w-4 h-4" />
                                    <span>{t('education.location')}</span>
                                </div>

                                {/* Description */}
                                <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                        {t('education.specializations')}:
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">{t('education.data_science')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">{t('education.ai')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">{t('education.machine_learning')}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">Computer Vision</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">Data Mining</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                                <span className="text-gray-700 dark:text-gray-300">Statistical Analysis</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
                                    <h4 className="font-semibold text-primary-900 dark:text-primary-100 mb-3 flex items-center gap-2">
                                        <GraduationCap className="w-5 h-5" />
                                        {t('education.achievements')}:
                                    </h4>
                                    <div className="space-y-2 text-primary-800 dark:text-primary-200">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                            <span>{t('education.research')}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                            <span>{t('education.projects')}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                                            <span>{t('education.learning')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Future Goals */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-8 card p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                            {t('education.future_goals')}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
                                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('education.complete_degree')}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {t('education.degree_desc')}
                                </p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('education.skill_dev')}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {t('education.skill_desc')}
                                </p>
                            </div>

                            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {t('education.career')}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {t('education.career_desc')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
