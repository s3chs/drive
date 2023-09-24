import { motion } from 'framer-motion';
import { transition } from '../Gallery/Gallery';

export default function Nav() {
    return (
        <motion.div className="nav-container">
            <motion.span className="nav-text" initial={{y: 120}} animate={{y: 0}} exit={{opacity: 0}} transition={transition}>
                dr1ve
            </motion.span>
        </motion.div>
    );
}
