import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AvatarProps {
    src: string;
    alt: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    fallback,
    size = 'md',
    className = ''
}) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const sizeClasses = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-lg',
        xl: 'w-24 h-24 text-2xl',
        '2xl': 'w-32 h-32 text-3xl'
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <motion.div
            className={`${sizeClasses[size]} ${className} relative`}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
        >
            {/* Circular hover effect - behind avatar */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-water-400 via-water-500 to-navy-600 opacity-0 -z-10"
                whileHover={{
                    opacity: [0, 0.1, 0.05],
                    scale: [1, 1.1, 1.05]
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Glowing ring effect - behind avatar */}
            <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-water-400 via-water-500 to-navy-600 opacity-5 -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Main avatar */}
            <div className="relative z-10">
                {!imageError && src ? (
                    <motion.img
                        src={src}
                        alt={alt}
                        className="w-full h-full rounded-full object-cover border-4 border-water-300 dark:border-navy-500 shadow-2xl transition-colors duration-300 hover:border-blue-400"
                        onError={handleImageError}
                        onLoad={handleImageLoad}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: imageLoaded ? 1 : 0,
                            scale: imageLoaded ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
                        }}
                    />
                ) : (
                    <motion.div
                        className="w-full h-full rounded-full bg-gradient-to-br from-water-400 to-navy-600 flex items-center justify-center border-4 border-water-300 dark:border-navy-500 shadow-2xl transition-colors duration-300 hover:border-blue-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{
                            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'
                        }}
                    >
                        <span className="text-white font-bold">
                            {fallback}
                        </span>
                    </motion.div>
                )}
            </div>

            {/* Floating particles around avatar */}
            <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-water-400 rounded-full opacity-60"
                animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                whileHover={{
                    scale: 1.5,
                    opacity: 1,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                }}
            />
            <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-navy-400 rounded-full opacity-60"
                animate={{
                    y: [0, 10, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                whileHover={{
                    scale: 1.5,
                    opacity: 1,
                    boxShadow: '0 0 20px rgba(30, 58, 95, 0.8)'
                }}
            />
            <motion.div
                className="absolute top-1/2 -left-3 w-2 h-2 bg-water-300 rounded-full opacity-60"
                animate={{
                    x: [0, -5, 0],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                whileHover={{
                    scale: 1.5,
                    opacity: 1,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                }}
            />

            {/* Additional circular hover particles */}
            <motion.div
                className="absolute top-1/4 -right-4 w-2 h-2 bg-navy-500 rounded-full opacity-0"
                whileHover={{
                    opacity: [0, 0.8, 0.6],
                    scale: [0, 1.2, 1],
                    x: [0, 5, 0]
                }}
                transition={{ duration: 0.4 }}
            />
            <motion.div
                className="absolute bottom-1/4 -left-4 w-2 h-2 bg-water-500 rounded-full opacity-0"
                whileHover={{
                    opacity: [0, 0.8, 0.6],
                    scale: [0, 1.2, 1],
                    x: [0, -5, 0]
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
            />
        </motion.div>
    );
};

export default Avatar;
