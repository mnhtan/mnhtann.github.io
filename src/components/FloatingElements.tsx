import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElement {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    type: 'circle' | 'square' | 'triangle' | 'diamond';
    color: string;
}

interface FloatingElementsProps {
    count?: number;
    intensity?: 'low' | 'medium' | 'high';
    colors?: string[];
    types?: ('circle' | 'square' | 'triangle' | 'diamond')[];
    className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
    count = 15,
    intensity = 'medium',
    colors = ['rgba(59, 130, 246, 0.1)', 'rgba(30, 58, 95, 0.1)', 'rgba(153, 27, 27, 0.1)'],
    types = ['circle', 'square', 'triangle', 'diamond'],
    className = ''
}) => {
    const getIntensityMultiplier = () => {
        switch (intensity) {
            case 'low': return 0.5;
            case 'medium': return 1;
            case 'high': return 1.5;
            default: return 1;
        }
    };

    const generateElements = (): FloatingElement[] => {
        const multiplier = getIntensityMultiplier();
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: (Math.random() * 20 + 10) * multiplier,
            delay: Math.random() * 5,
            duration: (Math.random() * 10 + 5) * multiplier,
            type: types[Math.floor(Math.random() * types.length)],
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
    };

    const elements = generateElements();

    const getShapeComponent = (element: FloatingElement) => {
        const baseProps = {
            style: {
                backgroundColor: element.color,
                width: element.size,
                height: element.size,
                left: `${element.x}%`,
                top: `${element.y}%`,
            },
            animate: {
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
            },
            transition: {
                duration: element.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: element.delay,
            },
            className: "absolute pointer-events-none"
        };

        switch (element.type) {
            case 'circle':
                return <motion.div {...baseProps} className={`${baseProps.className} rounded-full`} />;

            case 'square':
                return <motion.div {...baseProps} className={`${baseProps.className} rounded-lg`} />;

            case 'triangle':
                return (
                    <motion.div
                        {...baseProps}
                        className={`${baseProps.className} w-0 h-0`}
                        style={{
                            ...baseProps.style,
                            borderLeft: `${element.size / 2}px solid transparent`,
                            borderRight: `${element.size / 2}px solid transparent`,
                            borderBottom: `${element.size}px solid ${element.color}`,
                            backgroundColor: 'transparent',
                            width: 0,
                            height: 0,
                        }}
                    />
                );

            case 'diamond':
                return (
                    <motion.div
                        {...baseProps}
                        className={`${baseProps.className} transform rotate-45`}
                        style={{
                            ...baseProps.style,
                            width: element.size,
                            height: element.size,
                        }}
                    />
                );

            default:
                return <motion.div {...baseProps} className={`${baseProps.className} rounded-full`} />;
        }
    };

    return (
        <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
            {elements.map((element) => (
                <React.Fragment key={element.id}>
                    {getShapeComponent(element)}
                </React.Fragment>
            ))}
        </div>
    );
};

// Water Droplets Component
interface WaterDropletsProps {
    count?: number;
    className?: string;
}

export const WaterDroplets: React.FC<WaterDropletsProps> = ({
    count = 20,
    className = ''
}) => {
    const droplets = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 3,
        duration: Math.random() * 4 + 2,
    }));

    return (
        <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
            {droplets.map((droplet) => (
                <motion.div
                    key={droplet.id}
                    className="absolute w-2 h-2 bg-water-400 rounded-full opacity-60"
                    style={{
                        left: `${droplet.x}%`,
                        top: `${droplet.y}%`,
                        width: droplet.size,
                        height: droplet.size,
                    }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: droplet.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: droplet.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;