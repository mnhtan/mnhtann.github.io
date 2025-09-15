import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Brain, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';
import StarRating from './StarRating';

const Skills: React.FC = () => {
    const { skills } = portfolioData;
    const { t } = useLanguage();

    const getSkillName = (skillName: string) => {
        const skillMap: { [key: string]: string } = {
            'Giao tiếp': 'skills.communication',
            'Tự học': 'skills.self_study',
            'Giải quyết vấn đề': 'skills.problem_solving',
            'Deep Learning': 'skills.deep_learning',
            'Machine Learning': 'skills.machine_learning'
        };
        return skillMap[skillName] ? t(skillMap[skillName]) : skillName;
    };

    const technicalSkills = skills.filter(skill => skill.category === 'technical');
    const softSkills = skills.filter(skill => skill.category === 'soft');

    const skillCategories = [
        {
            title: t('skills.technical'),
            skills: technicalSkills,
            icon: Code,
            color: 'primary'
        },
        {
            title: t('skills.soft'),
            skills: softSkills,
            icon: Users,
            color: 'secondary'
        }
    ];

    return (
        <section id="skills" className="section-padding bg-water-50/30 dark:bg-navy-900/30 relative overflow-hidden">

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Waves className="water-icon" size={32} />
                        </motion.div>
                        {t('skills.title')}
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="section-subtitle">
                        {t('skills.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)'
                            }}
                            className="relative overflow-hidden rounded-2xl p-8 bg-white/60 dark:bg-navy-800/60 backdrop-blur-md border border-water-200/50 dark:border-navy-700/50"
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
                                <div className="flex items-center gap-3 mb-8">
                                    <motion.div
                                        className={`w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <category.icon className={`w-6 h-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {category.skills.map((skill, skillIndex) => {
                                        // Convert percentage to star rating (1-5)
                                        const starRating = Math.round((skill.level / 100) * 5);
                                        const isHighRated = starRating >= 4;
                                        const isTopRated = starRating === 5;

                                        return (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    boxShadow: isTopRated
                                                        ? '0 10px 30px rgba(252, 211, 77, 0.3)'
                                                        : isHighRated
                                                            ? '0 10px 30px rgba(59, 130, 246, 0.2)'
                                                            : '0 10px 30px rgba(0, 0, 0, 0.1)'
                                                }}
                                                className={`breathing-technique p-6 card-3d relative overflow-hidden tomioka-hover-container ${isTopRated ? 'skill-card-5-star' :
                                                        isHighRated ? 'skill-card-4-star' : ''
                                                    }`}
                                            >
                                                {/* Floating particles for high-rated skills */}
                                                {isHighRated && (
                                                    <div className="skill-particles">
                                                        <div className="skill-particle"></div>
                                                        <div className="skill-particle"></div>
                                                        <div className="skill-particle"></div>
                                                        <div className="skill-particle"></div>
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="font-semibold text-navy-800 dark:text-water-50">
                                                        {getSkillName(skill.name)}
                                                    </h4>
                                                    <StarRating
                                                        rating={starRating}
                                                        size="md"
                                                        showNumber={false}
                                                    />
                                                </div>

                                                {/* Enhanced skill description */}
                                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                                    {starRating === 5 && '🌟 Expert Level'}
                                                    {starRating === 4 && '⭐ Advanced Level'}
                                                    {starRating === 3 && '📚 Intermediate Level'}
                                                    {starRating === 2 && '📖 Basic Level'}
                                                    {starRating === 1 && '🌱 Beginner Level'}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 20px 40px rgba(153, 27, 27, 0.1)'
                        }}
                        className="card p-8 card-3d relative overflow-hidden"
                    >
                        {/* Animated background pattern */}
                        <motion.div
                            className="absolute inset-0 opacity-5"
                            animate={{
                                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            style={{
                                background: 'linear-gradient(45deg, transparent 30%, rgba(153, 27, 27, 0.1) 50%, transparent 70%)',
                                backgroundSize: '200% 200%'
                            }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {t('skills.specialization')}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Computer Vision', 'Deep Learning', 'Data Mining', 'Machine Learning', 'Neural Networks', 'Data Visualization', 'Statistical Analysis', 'Model Deployment'].map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0 5px 15px rgba(153, 27, 27, 0.2)'
                                        }}
                                        className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
                                    >
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
