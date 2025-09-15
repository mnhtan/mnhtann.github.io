import React from 'react';
import { motion } from 'framer-motion';

interface WaterWavesProps {
    intensity?: 'low' | 'medium' | 'high';
    className?: string;
}

const WaterWaves: React.FC<WaterWavesProps> = ({ intensity = 'medium', className = '' }) => {
    const getWaveHeight = () => {
        switch (intensity) {
            case 'low': return 'h-8';
            case 'high': return 'h-16';
            default: return 'h-12';
        }
    };

    const getAnimationDuration = () => {
        switch (intensity) {
            case 'low': return 8;
            case 'high': return 4;
            default: return 6;
        }
    };

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Wave Layer 1 */}
            <motion.div
                className={`absolute bottom-0 left-0 w-full ${getWaveHeight()} bg-gradient-to-t from-water-400/30 to-transparent`}
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: getAnimationDuration(),
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Wave Layer 2 */}
            <motion.div
                className={`absolute bottom-0 left-0 w-full ${getWaveHeight()} bg-gradient-to-t from-water-300/20 to-transparent`}
                animate={{
                    x: ['100%', '-100%'],
                }}
                transition={{
                    duration: getAnimationDuration() + 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                }}
            />

            {/* Wave Layer 3 */}
            <motion.div
                className={`absolute bottom-0 left-0 w-full ${getWaveHeight()} bg-gradient-to-t from-water-500/25 to-transparent`}
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: getAnimationDuration() - 1,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 2,
                }}
            />

            {/* Ripple Effects */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-4 h-4 border border-water-400/40 rounded-full"
                    style={{
                        bottom: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                    }}
                    animate={{
                        scale: [0, 3, 0],
                        opacity: [0.8, 0.2, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default WaterWaves;
