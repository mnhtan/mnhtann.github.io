import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ImageLoaderProps {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
    style?: React.CSSProperties;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
    src,
    alt,
    fallbackSrc,
    className = '',
    style = {}
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Main Image */}
            <motion.img
                src={imageError && fallbackSrc ? fallbackSrc : src}
                alt={alt}
                className={`w-full h-full object-contain transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                style={style}
                onLoad={handleImageLoad}
                onError={handleImageError}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />

            {/* Loading Placeholder */}
            {!imageLoaded && !imageError && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: imageLoaded ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-16 h-16 border-4 border-water-400/30 border-t-water-400 rounded-full animate-spin"></div>
                </motion.div>
            )}

            {/* Fallback Silhouette */}
            {imageError && !fallbackSrc && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-water-300 to-navy-700 rounded-full opacity-80"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-navy-800 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-navy-800 rounded-full"></div>
                </motion.div>
            )}
        </div>
    );
};

export default ImageLoader;
