import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cursor = cursorRef.current;
            if (cursor) {
                
                const { visualViewport } = window;
                const scale = visualViewport?.scale || 1;
                const offsetX = visualViewport?.offsetLeft || 0;
                const offsetY = visualViewport?.offsetTop || 0;

                
                const x = (e.clientX - offsetX) / scale;
                const y = (e.clientY - offsetY) / scale;

                
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;

                
                const linkElement = document.elementFromPoint(e.clientX, e.clientY);
                const isLinkHovering = linkElement?.classList.contains('is-hovering') || false;
                setIsHovering(isLinkHovering);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            ref={cursorRef}
            className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                borderRadius: isHovering ? '30%' : '50%',
                backgroundColor: 'white',
                pointerEvents: 'none',
                mixBlendMode: 'difference',
                transform: 'translate(-50%, -50%)',
            }}
            animate={{
                width: isHovering ? 30 : 20,
                height: isHovering ? 30 : 20,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                mass: 0.5,
            }}
        />
    );
};

export default Cursor;
