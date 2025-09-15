import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
    enabled?: boolean;
    glowEffect?: boolean;
}

interface WaveSprite {
    id: number;
    x: number;
    y: number;
    scale: number;
    rotation: number;
    swirl: number;
    flip: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true, glowEffect = true }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [swordPosition, setSwordPosition] = useState({ x: 0, y: 0 });
    const [waveSprites, setWaveSprites] = useState<WaveSprite[]>([]);

    const targetPosition = useRef({ x: 0, y: 0 });
    const lastSpawnPosition = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>();

    // CSS Variables
    const LIFE = 2200; // ms
    const GAP = 10; // px
    const SWORD_SIZE = 64; // px
    const BASE_SCALE = 0.42;

    useEffect(() => {
        if (!enabled) return;

        // Initialize positions
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        targetPosition.current = { x: centerX, y: centerY };
        setCursorPosition({ x: centerX, y: centerY });
        setSwordPosition({ x: centerX, y: centerY });
        lastSpawnPosition.current = { x: centerX, y: centerY };

        const handleMouseMove = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [enabled]);

    useEffect(() => {
        if (!enabled) return;

        const tick = () => {
            const alpha = 0.28; // Smooth lerp factor
            const target = targetPosition.current;
            const current = swordPosition;

            const newX = current.x + (target.x - current.x) * alpha;
            const newY = current.y + (target.y - current.y) * alpha;

            const vx = newX - current.x;
            const vy = newY - current.y;
            const rotation = Math.atan2(vy, vx) * 180 / Math.PI;

            setSwordPosition({ x: newX, y: newY });

            // Spawn wave sprite based on distance
            const dx = newX - lastSpawnPosition.current.x;
            const dy = newY - lastSpawnPosition.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > GAP) {
                spawnWaveSprite(newX, newY, rotation);
                lastSpawnPosition.current = { x: newX, y: newY };
            }

            animationRef.current = requestAnimationFrame(tick);
        };

        animationRef.current = requestAnimationFrame(tick);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [enabled, swordPosition]);

    const spawnWaveSprite = (x: number, y: number, rotation: number) => {
        const scale = BASE_SCALE * (0.85 + Math.random() * 0.5);
        const swirl = Math.random() * 20 - 10;
        const flip = Math.random() < 0.5 ? -1 : 1;

        const newSprite: WaveSprite = {
            id: Date.now() + Math.random(),
            x,
            y,
            scale,
            rotation: rotation + (flip < 0 ? 180 : 0),
            swirl,
            flip
        };

        setWaveSprites(prev => [...prev, newSprite]);

        // Remove sprite after animation duration
        setTimeout(() => {
            setWaveSprites(prev => prev.filter(sprite => sprite.id !== newSprite.id));
        }, LIFE);
    };

    if (!enabled) return null;

    return (
        <>
            {/* Main Sword Cursor */}
            <div
                className="fixed pointer-events-none z-[99999]"
                style={{
                    left: swordPosition.x + 17, // Move sword to final position
                    top: swordPosition.y + 20,  // Move sword down
                    width: SWORD_SIZE,
                    height: SWORD_SIZE,
                    transform: 'translate(-50%, -50%)', // Center the sword so tip aligns with cursor
                    willChange: 'transform, left, top'
                }}
            >
                <img
                    src="/images/Giyuu Tomioka's Nichirin katana.png"
                    alt="Katana Cursor"
                    className="w-full h-full object-contain"
                    style={{
                        filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.55)) brightness(1.1)',
                        transform: 'rotate(90deg)' // Rotate katana 90 degrees (45 + 45)
                    }}
                />
            </div>

            {/* Secondary Sword - Glowing Effect */}
            <div
                className="fixed pointer-events-none z-[99998]"
                style={{
                    left: swordPosition.x + 17, // Move sword to final position
                    top: swordPosition.y + 20,  // Move sword down
                    width: SWORD_SIZE + 8,
                    height: SWORD_SIZE + 8,
                    transform: 'translate(-50%, -50%)', // Center the sword so tip aligns with cursor
                    willChange: 'transform, left, top'
                }}
            >
                <img
                    src="/images/Giyuu Tomioka's Nichirin katana.png"
                    alt="Katana Glow"
                    className="w-full h-full object-contain opacity-60"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8)) blur(1px)',
                        transform: 'rotate(90deg)', // Rotate katana 90 degrees (45 + 45)
                        animation: 'pulse 2s ease-in-out infinite'
                    }}
                />
            </div>

            {/* Wave Sprites */}
            {waveSprites.map((sprite) => (
                <div
                    key={sprite.id}
                    className="fixed pointer-events-none z-[5]"
                    style={{
                        left: sprite.x,
                        top: sprite.y,
                        transform: 'translate(-50%, -50%)',
                        width: `calc(280px * ${sprite.scale})`,
                        aspectRatio: '4 / 2.6',
                        background: "url('/images/wave.png') center/contain no-repeat",
                        animation: `fade-spin ${LIFE}ms ease-out forwards`,
                        filter: `
                            drop-shadow(0 3px 8px rgba(0,90,255,0.35))
                            saturate(1.05)
                            hue-rotate(${(Math.random() * 8 - 4).toFixed(1)}deg)
                        `,
                        willChange: 'transform, opacity',
                        '--scale': sprite.scale,
                        '--rot': `${sprite.rotation}deg`,
                        '--swirl': `${sprite.swirl}deg`
                    } as React.CSSProperties}
                />
            ))}
        </>
    );
};

export default CustomCursor;