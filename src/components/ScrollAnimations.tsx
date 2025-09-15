import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

// Fade In Up Animation
export const FadeInUp: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Fade In Down Animation
export const FadeInDown: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Fade In Left Animation
export const FadeInLeft: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Fade In Right Animation
export const FadeInRight: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Scale In Animation
export const ScaleIn: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Rotate In Animation
export const RotateIn: React.FC<ScrollAnimationProps> = ({
    children,
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, rotate: -180 }}
            animate={inView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -180 }}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Parallax Element
interface ParallaxElementProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
    children,
    speed = 0.5,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            animate={inView ? { y: 0 } : { y: 100 * speed }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Staggered Animation Container
interface StaggeredContainerProps {
    children: React.ReactNode;
    staggerDelay?: number;
    className?: string;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
    children,
    staggerDelay = 0.1,
    className = ''
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Staggered Item
interface StaggeredItemProps {
    children: React.ReactNode;
    className?: string;
}

export const StaggeredItem: React.FC<StaggeredItemProps> = ({
    children,
    className = ''
}) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};