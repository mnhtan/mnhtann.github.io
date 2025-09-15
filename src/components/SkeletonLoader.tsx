import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    variant?: 'text' | 'rectangular' | 'circular' | 'card';
    animation?: 'wave' | 'pulse' | 'shimmer';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    className = '',
    width = '100%',
    height = '1rem',
    variant = 'rectangular',
    animation = 'wave'
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'circular':
                return 'rounded-full';
            case 'text':
                return 'rounded';
            case 'card':
                return 'rounded-lg';
            default:
                return 'rounded';
        }
    };

    const getAnimationStyles = () => {
        switch (animation) {
            case 'pulse':
                return {
                    animate: { opacity: [0.5, 1, 0.5] },
                    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                };
            case 'shimmer':
                return {
                    animate: {
                        backgroundPosition: ['-200% 0', '200% 0']
                    },
                    transition: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                    style: {
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                        backgroundSize: '200% 100%'
                    }
                };
            default: // wave
                return {
                    animate: {
                        background: [
                            'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                            'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
                            'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)'
                        ]
                    },
                    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                };
        }
    };

    const animationProps = getAnimationStyles();

    return (
        <motion.div
            className={`bg-gray-200 dark:bg-gray-700 ${getVariantStyles()} ${className}`}
            style={{
                width,
                height,
                ...animationProps.style
            }}
            animate={animationProps.animate}
            transition={animationProps.transition}
        />
    );
};

// Predefined skeleton components
export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({
    lines = 3,
    className = ''
}) => (
    <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
            <SkeletonLoader
                key={index}
                height="1rem"
                width={index === lines - 1 ? '75%' : '100%'}
                variant="text"
            />
        ))}
    </div>
);

export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`p-6 border border-gray-200 dark:border-gray-700 rounded-lg ${className}`}>
        <div className="flex items-center space-x-4 mb-4">
            <SkeletonLoader variant="circular" width={40} height={40} />
            <div className="flex-1 space-y-2">
                <SkeletonLoader height="1rem" width="60%" />
                <SkeletonLoader height="0.875rem" width="40%" />
            </div>
        </div>
        <SkeletonText lines={3} />
    </div>
);

export const SkeletonAvatar: React.FC<{ size?: number; className?: string }> = ({
    size = 40,
    className = ''
}) => (
    <SkeletonLoader
        variant="circular"
        width={size}
        height={size}
        className={className}
    />
);

export const SkeletonButton: React.FC<{ className?: string; width?: string }> = ({ className = '', width = '8rem' }) => (
    <SkeletonLoader
        height="2.5rem"
        width={width}
        variant="rectangular"
        className={`rounded-lg ${className}`}
    />
);

export const SkeletonImage: React.FC<{
    width?: string | number;
    height?: string | number;
    className?: string
}> = ({ width = '100%', height = '200px', className = '' }) => (
    <SkeletonLoader
        width={width}
        height={height}
        variant="rectangular"
        className={`rounded-lg ${className}`}
    />
);

// Loading states for different components
export const ProjectCardSkeleton: React.FC = () => (
    <div className="card p-6 space-y-4">
        <SkeletonImage height="200px" />
        <div className="space-y-2">
            <SkeletonLoader height="1.5rem" width="80%" />
            <SkeletonText lines={2} />
        </div>
        <div className="flex space-x-2">
            <SkeletonButton />
            <SkeletonButton />
        </div>
    </div>
);

export const SkillCardSkeleton: React.FC = () => (
    <div className="card p-6 text-center space-y-4">
        <SkeletonAvatar size={60} className="mx-auto" />
        <SkeletonLoader height="1.25rem" width="70%" className="mx-auto" />
        <SkeletonLoader height="0.5rem" width="100%" />
    </div>
);

export const ContactFormSkeleton: React.FC = () => (
    <div className="space-y-6">
        <div className="space-y-2">
            <SkeletonLoader height="1rem" width="20%" />
            <SkeletonLoader height="2.5rem" width="100%" />
        </div>
        <div className="space-y-2">
            <SkeletonLoader height="1rem" width="25%" />
            <SkeletonLoader height="6rem" width="100%" />
        </div>
        <SkeletonButton width="100%" />
    </div>
);

export default SkeletonLoader;
