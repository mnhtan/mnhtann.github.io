import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code, Waves } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
    const { projects } = portfolioData;
    const [selectedRole, setSelectedRole] = useState<'ALL' | 'AI' | 'DE' | 'DA' | 'BA' | 'BI'>('ALL');

    const roles: Array<'ALL' | 'AI' | 'DE' | 'DA' | 'BA' | 'BI'> = ['ALL', 'AI', 'DE', 'DA', 'BA', 'BI'];

    const filteredProjects = useMemo(() => {
        if (selectedRole === 'ALL') return projects;
        return projects.filter(p => !p.roleTags || p.roleTags.includes(selectedRole));
    }, [projects, selectedRole]);
    const { t } = useLanguage();

    const getProjectDescription = (projectId: string) => {
        const descriptionMap: { [key: string]: string } = {
            'traffic-flow-tracking': 'projects.traffic_description',
            'data-analyst': 'projects.data_analyst_description',
            'logo-detection': 'projects.logo_detection_description'
        };
        return descriptionMap[projectId] ? t(descriptionMap[projectId]) : '';
    };

    return (
        <section id="projects" className="section-padding bg-water-50/50 dark:bg-navy-900/50">
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
                        {t('projects.title')}
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="section-subtitle">
                        {t('projects.description')}
                    </p>
                </motion.div>

                {/* Role Filter */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                    {roles.map(role => (
                        <motion.button
                            key={role}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedRole(role)}
                            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${selectedRole === role
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white/60 dark:bg-navy-800/60 text-gray-700 dark:text-gray-200 border-gray-300/50 dark:border-navy-700/50 hover:bg-white'
                                }`}
                        >
                            {role}
                        </motion.button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="card group overflow-hidden card-3d water-wave"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <Code className="w-16 h-16 text-white opacity-80" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {getProjectDescription(project.id)}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('projects.technologies')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Meta */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{project.year}</span>
                                    </div>

                                    {/* GitHub Link */}
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors duration-300"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                        <ExternalLink className="w-3 h-3" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="card p-8 max-w-2xl mx-auto card-3d">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('projects.interested')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            {t('projects.contact')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="https://github.com/mnhtan"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center justify-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                {t('projects.view_github')}
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const element = document.querySelector('#contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="btn-secondary flex items-center justify-center gap-2"
                            >
                                <ExternalLink className="w-5 h-5" />
                                {t('projects.contact_button')}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
