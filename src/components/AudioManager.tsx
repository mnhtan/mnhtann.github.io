import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const AudioManager: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Create ambient water sounds using Web Audio API
    useEffect(() => {
        if (!audioRef.current) return;

        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
        gainNode.gain.value = volume;

        // Create water flow sound
        const createWaterSound = () => {
            const oscillator = audioContext.createOscillator();
            const filter = audioContext.createBiquadFilter();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, audioContext.currentTime);

            oscillator.connect(filter);
            filter.connect(gainNode);

            return oscillator;
        };

        let waterOscillator: OscillatorNode | null = null;

        if (isPlaying && !isMuted) {
            waterOscillator = createWaterSound();
            waterOscillator.start();
        }

        return () => {
            if (waterOscillator) {
                waterOscillator.stop();
            }
        };
    }, [isPlaying, isMuted, volume]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-4 right-20 z-40"
        >
            <div className="bg-navy-800/80 backdrop-blur-md rounded-2xl p-4 border border-water-400/20">
                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-water-500/20 hover:bg-water-500/30 transition-colors"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-water-400" />
                        ) : (
                            <Play className="w-5 h-5 text-water-400" />
                        )}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-water-500/20 hover:bg-water-500/30 transition-colors"
                    >
                        {isMuted ? (
                            <VolumeX className="w-5 h-5 text-water-400" />
                        ) : (
                            <Volume2 className="w-5 h-5 text-water-400" />
                        )}
                    </motion.button>

                    <div className="w-20">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-1 bg-navy-600 rounded-lg appearance-none cursor-pointer slider"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AudioManager;
