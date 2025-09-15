import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmartImageLoader from './SmartImageLoader';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('');

    const loadingMessages = [
        'Preparing Water Breathing Techniques...',
        'Loading Data Science Portfolio...',
        'Calming the waters...',
        'Ready for innovation...',
        'Sharpening the Nichirin Blade...',
        'Channeling Water Hashira Power...',
        'Preparing for battle...',
        'Loading Tomioka\'s techniques...'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 1000); // Increased delay for completion effect
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        const textInterval = setInterval(() => {
            setLoadingText(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-water-800"
            >
                {/* Water Waves Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-b from-water-400/20 to-transparent animate-wave-motion"></div>
                    <div className="absolute top-1/4 left-0 w-full h-16 bg-gradient-to-b from-water-300/15 to-transparent animate-wave-motion" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-0 w-full h-12 bg-gradient-to-b from-water-200/10 to-transparent animate-wave-motion" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-water-500/30 to-transparent animate-wave-motion" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Floating Water Droplets */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-water-400 rounded-full opacity-60"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Floating Wave Trails */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={`wave-${i}`}
                            className="absolute w-20 h-10 opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                opacity: [0, 0.4, 0],
                                scale: [0.5, 1, 0.5],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                            }}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    background: 'url(/images/wave.png) center/contain no-repeat',
                                    filter: 'brightness(1.2) saturate(1.5)',
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Main Loading Content */}
                <div className="relative z-10 text-center">
                    {/* Giyuu Tomioka Image */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mb-8"
                    >
                        <div className="w-48 h-48 mx-auto relative overflow-hidden rounded-full">
                            {/* Giyuu Tomioka Image with Smart Loading */}
                            <SmartImageLoader
                                baseName="profile-photo"
                                alt="Phan Minh Tan - Data Science Developer"
                                fallbackBaseName="giyuu-silhouette"
                                className="w-full h-full border-4 border-water-400/50 shadow-2xl"
                                style={{
                                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
                                }}
                            />

                            {/* Water Breathing effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-water-400"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Additional glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-water-400/20 to-transparent"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Floating Katana */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                animate={{
                                    opacity: [0, 1, 0.8, 1],
                                    scale: [0, 1, 1.1, 1],
                                    rotate: [-45, 0, 5, 0],
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    delay: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                                className="absolute -top-8 -right-8 w-16 h-16 pointer-events-none"
                            >
                                <img
                                    src="/images/Giyuu Tomioka's Nichirin katana.png"
                                    alt="Katana"
                                    className="w-full h-full object-contain filter drop-shadow-lg"
                                    style={{
                                        filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8)) brightness(1.2)',
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Loading Text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-3xl font-bold text-water-100 mb-4 japanese-brush"
                    >
                        Phan Minh Tan
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-water-200 mb-8 text-lg"
                    >
                        Data Science & AI Developer
                    </motion.p>

                    {/* Loading Message */}
                    <motion.div
                        key={loadingText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-water-300 mb-6 h-6"
                    >
                        {loadingText}
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-80 mx-auto">
                        <div className="h-3 bg-navy-700 rounded-full overflow-hidden relative">
                            <motion.div
                                className="h-full bg-gradient-to-r from-water-400 via-water-500 to-water-600 rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>

                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
                                    width: `${progress}%`,
                                }}
                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>

                        <motion.div
                            className="text-water-400 mt-3 text-sm font-medium"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            {progress}%
                        </motion.div>

                        {/* Progress dots */}
                        <div className="flex justify-center mt-2 space-x-1">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i < Math.floor(progress / 10) ? 'bg-water-400' : 'bg-navy-600'
                                        }`}
                                    animate={{
                                        scale: i < Math.floor(progress / 10) ? [1, 1.2, 1] : 1,
                                        opacity: i < Math.floor(progress / 10) ? [0.7, 1, 0.7] : 0.3,
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Water Breathing Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-8 text-water-300 italic"
                    >
                        "Water Breathing, First Form: Water Surface Slash"
                    </motion.div>

                    {/* Completion Effect */}
                    {progress >= 100 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-6"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360],
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="text-water-400 text-lg font-bold"
                            >
                                ⚔️ Ready for Battle! ⚔️
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LoadingScreen;
