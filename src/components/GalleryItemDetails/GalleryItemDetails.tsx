import { motion } from 'framer-motion';
import { transition } from '../Gallery/Gallery';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarPageData, data } from '../../data';

export default function GalleryItemDetails() {

    const [fetchedData, setFetchedData] = useState<CarPageData | undefined>();
    const location = useLocation();

    useEffect(() => {
        function transformString(input: string) {
            const parts = input.split('-');
            for (let i = 1; i < parts.length; i++) {
                parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
            }
            return parts.join('');
        }

        setFetchedData(data[transformString(location.pathname.slice(1))]);
    }, [fetchedData]);

    return (
        <motion.div className="gallery-item-details-container">
            <motion.div
                className="back-btn-container"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >
                <Link to="/">
                    Retour
                </Link>
            </motion.div>
            <motion.img
                src={fetchedData?.src}
                alt={fetchedData?.text}
                className="car-img"
                initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                transition={{delay: 0.2, ...transition}}
            />
            <motion.span className=" car-brand">
                <motion.span
                    initial={{y: 200}}
                    animate={{y: 0}}
                    exit={{y: 200}}
                    transition={{delay: 0.2, ...transition}}
                >
                    {fetchedData?.text}
                </motion.span>
            </motion.span>
        </motion.div>
    );
}
