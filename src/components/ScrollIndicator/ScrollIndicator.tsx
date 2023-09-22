import { motion } from 'framer-motion';
import './scroll-indicator.scss';
import { transition } from '../Gallery/Gallery';

export default function ScrollIndicator() {

    return (
        <motion.div
            className="scroll-indicator-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={transition}
        >
            <span className="scroll-indicator">scroll</span>
        </motion.div>
    );
}
