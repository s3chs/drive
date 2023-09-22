import { motion } from 'framer-motion';
import './welcome.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { transition } from '../Gallery/Gallery';

export default function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 1500);
        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <motion.div
            className="welcome-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={transition}
        >
            {Array.from({length: 5}, (_, index) => (
                <div className={`line`} key={index}>
                    {Array.from({length: 4}, (_, i) => (
                        <span key={i} className="word">dr1ve</span>
                    ))}
                </div>
            ))}
        </motion.div>
    );
}

