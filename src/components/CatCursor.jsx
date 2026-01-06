import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CatCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });

            // Add new position to trail
            setTrail(prev => {
                const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: `${Date.now()}-${Math.random()}` }];
                return newTrail.slice(-12); // Keep last 12 positions
            });

            // Check if hovering over clickable element
            const target = e.target;
            const isClickable = (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            );
            setIsPointer(isClickable);
        };

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16, // Center offset
            y: mousePosition.y - 16,
            scale: 1
        },
        pointer: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1.5 // Bigger when clicking
        }
    };

    return (
        <>
            {/* Trail Particles */}
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    initial={{ opacity: 0.8, scale: 0.5, rotate: 0 }}
                    animate={{ opacity: 0, scale: 1.5, rotate: 180 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed pointer-events-none z-[9998] text-yellow-400 text-xl font-bold leading-none"
                    style={{
                        left: point.x,
                        top: point.y,
                        transform: 'translate(-50%, -50%)',
                        textShadow: '0 0 8px rgba(250, 204, 21, 0.8), 0 0 15px rgba(234, 179, 8, 0.5)'
                    }}
                >
                    ★
                </motion.div>
            ))}

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                variants={variants}
                animate={isPointer ? "pointer" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 800,
                    damping: 35,
                    mass: 0.5
                }}
            >
                <img
                    src="/pixel-duck.gif"
                    alt="Pixel Duck Cursor"
                    className="w-12 h-12 object-contain drop-shadow-lg"
                />
            </motion.div>
        </>
    );
};

export default CatCursor;
