import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    life: number;
    maxLife: number;
}

interface ParticleSystemProps {
    particleCount?: number;
    intensity?: 'low' | 'medium' | 'high';
    color?: string;
    className?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
    particleCount = 50,
    intensity = 'medium',
    color = 'rgba(59, 130, 246, 0.6)',
    className = ''
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();

    const getIntensityMultiplier = () => {
        switch (intensity) {
            case 'low': return 0.5;
            case 'medium': return 1;
            case 'high': return 1.5;
            default: return 1;
        }
    };

    const createParticle = (canvas: HTMLCanvasElement): Particle => {
        const multiplier = getIntensityMultiplier();
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2 * multiplier,
            vy: (Math.random() - 0.5) * 2 * multiplier,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            life: 0,
            maxLife: Math.random() * 200 + 100
        };
    };

    const updateParticle = (particle: Particle, canvas: HTMLCanvasElement) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Add some floating motion
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Fade out over time
        particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));

        // Reset particle if it's dead or out of bounds
        if (particle.life >= particle.maxLife ||
            particle.x < 0 || particle.x > canvas.width ||
            particle.y < 0 || particle.y > canvas.height) {
            return createParticle(canvas);
        }

        return particle;
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particlesRef.current = particlesRef.current.map(particle => {
            const updatedParticle = updateParticle(particle, canvas);
            drawParticle(ctx, updatedParticle);
            return updatedParticle;
        });

        animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Initialize canvas
        handleResize();

        // Create initial particles
        particlesRef.current = Array.from({ length: particleCount }, () => createParticle(canvas));

        // Start animation
        animate();

        // Handle resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, intensity, color]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 pointer-events-none z-0 ${className}`}
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleSystem;