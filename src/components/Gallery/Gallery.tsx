import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { data } from '../../data';
import ScrollIndicator from '../ScrollIndicator/ScrollIndicator';
import React from 'react';

export const transition = {
    duration: 1,
    ease: [0.77, 0, 0.175, 1],
};

export default function Gallery() {

    return (
        <motion.div>
            <motion.div
                className="gallery-container"
                data-scroll-section
            >
                <div
                    className="text-container title"
                    data-scroll
                    data-scroll-speed="-10"
                    data-scroll-position="top"
                >
                    <span>
                        <motion.span
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={transition}
                        >
                            welcome to DR1VE, an image gallery made by philippe buteau
                        </motion.span>
                    </span>
                </div>
                <motion.div
                    className="text-container fancy"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <span>
                        <motion.span exit={{y: 200}} transition={transition}>
                            vroum vroum
                        </motion.span>
                    </span>
                </motion.div>
                <motion.div className="image-container one">
                    <Link to={data.mercedes.path}>
                        <motion.img
                            src={data.mercedes.src}
                            alt={data.mercedes.text}
                            className="image one"
                            data-scroll
                            data-scroll-speed="1"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </motion.div>
                <div className="image-container two">
                    <Link to={data.ford.path}>
                        <motion.img
                            src={data.ford.src}
                            alt="ford"
                            className="image two"
                            data-scroll
                            data-scroll-speed="-3"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container three">
                    <Link to={data.bmw.path}>
                        <motion.img
                            src={data.bmw.src}
                            alt={data.bmw.text}
                            className="image three"
                            data-scroll
                            data-scroll-speed="2"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className=" image-container four">
                    <Link to={data.cadillac.path}>
                        <motion.img
                            src={data.cadillac.src}
                            alt={data.cadillac.text}
                            className="image four"
                            data-scroll
                            data-scroll-speed="-1"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container five">
                    <Link to={data.porsche.path}>
                        <motion.img
                            src={data.porsche.src}
                            alt={data.porsche.text}
                            className="image five"
                            data-scroll
                            data-scroll-speed="0.5"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container six">
                    <Link to={data.triumph.path}>
                        <motion.img
                            src={data.triumph.src}
                            alt={data.triumph.text}
                            className="image six"
                            data-scroll
                            data-scroll-speed="1"
                            initial={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            animate={{clipPath: 'inset(0% 0% 0% 0%)'}}
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container seven">
                    <Link to={data.golf.path}>
                        <motion.img
                            src={data.golf.src}
                            alt={data.golf.text}
                            className="image seven"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container eight">
                    <Link to={data.buick.path}>
                        <motion.img
                            src={data.buick.src}
                            alt={data.buick.text}
                            className="image eight"
                            data-scroll
                            data-scroll-speed="1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container nine">
                    <Link to={data.mustang.path}>
                        <motion.img
                            src={data.mustang.src}
                            alt={data.mustang.text}
                            className="image nine"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <motion.div
                    className="text-container fancy-turbo"
                    exit={{opacity: 0}}
                >
                    <span>
                        <motion.span exit={{y: 200}} transition={transition}>
                            turbo
                        </motion.span>
                    </span>
                </motion.div>
                <div className="image-container ten">
                    <Link to={data.mustangTwo.path}>
                        <motion.img
                            src={data.mustangTwo.src}
                            alt={data.mustangTwo.text}
                            className="image ten"
                            data-scroll
                            data-scroll-speed="1.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <motion.div
                    className="text-container fancy-turbo-two"
                    exit={{opacity: 0}}
                >
                    <span>
                        <motion.span exit={{y: 200}} transition={transition}>
                            brakes
                        </motion.span>
                    </span>
                </motion.div>
                <div className="image-container eleven">
                    <Link to={data.porscheTwo.path}>
                        <motion.img
                            src={data.porscheTwo.src}
                            alt={data.porscheTwo.text}
                            className="image eleven"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twelve">
                    <Link to={data.mercedesTwo.path}>
                        <motion.img
                            src={data.mercedesTwo.src}
                            alt={data.mercedesTwo.text}
                            className="image twelve"
                            data-scroll
                            data-scroll-speed="1.2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirteen">
                    <Link to={data.tire.path}>
                        <motion.img
                            src={data.tire.src}
                            alt={data.tire.text}
                            className="image thirteen"
                            data-scroll
                            data-scroll-speed="1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container fourteen">
                    <Link to={data.bmwTwo.path}>
                        <motion.img
                            src={data.bmwTwo.src}
                            alt={data.bmwTwo.text}
                            className="image fourteen"
                            data-scroll
                            data-scroll-speed="-1.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <motion.div
                    className="text-container fancy-two"
                    exit={{opacity: 0}}
                >
                    <span>
                        <motion.span exit={{y: 200}} transition={transition}>
                            tut tut
                        </motion.span>
                    </span>
                </motion.div>
                <div className="image-container fifteen">
                    <Link to={data.chevroletTwo.path}>
                        <motion.img
                            src={data.chevroletTwo.src}
                            alt={data.chevroletTwo.text}
                            className="image fifteen"
                            data-scroll
                            data-scroll-speed="1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container sixteen">
                    <Link to={data.chevroletThree.path}>
                        <motion.img
                            src={data.chevroletThree.src}
                            alt={data.chevroletThree.text}
                            className="image sixteen"
                            data-scroll
                            data-scroll-speed="-1.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container seventeen">
                    <Link to={data.classic.path}>
                        <motion.img
                            src={data.classic.src}
                            alt={data.classic.text}
                            className="image seventeen"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container eighteen">
                    <Link to={data.porscheThree.path}>
                        <motion.img
                            src={data.porscheThree.src}
                            alt={data.porscheThree.text}
                            className="image eighteen"
                            data-scroll
                            data-scroll-speed="0.7"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container nineteen">
                    <Link to={data.classicTwo.path}>
                        <motion.img
                            src={data.classicTwo.src}
                            alt={data.classicTwo.text}
                            className="image nineteen"
                            data-scroll
                            data-scroll-speed="1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty">
                    <Link to={data.chevroletFour.path}>
                        <motion.img
                            src={data.chevroletFour.src}
                            alt={data.chevroletFour.text}
                            className="image twenty"
                            data-scroll
                            data-scroll-speed="-0.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-one">
                    <Link to={data.astonMartin.path}>
                        <motion.img
                            src={data.astonMartin.src}
                            alt={data.astonMartin.text}
                            className="image twenty-one"
                            data-scroll
                            data-scroll-speed="2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-two">
                    <Link to={data.lamborghini.path}>
                        <motion.img
                            src={data.lamborghini.src}
                            alt={data.lamborghini.text}
                            className="image twenty-two"
                            data-scroll
                            data-scroll-speed="-0.75"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-three">
                    <Link to={data.lancia.path}>
                        <motion.img
                            src={data.lancia.src}
                            alt={data.lancia.text}
                            className="image twenty-three"
                            data-scroll
                            data-scroll-speed="0.75"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-four">
                    <Link to={data.ferrari.path}>
                        <motion.img
                            src={data.ferrari.src}
                            alt={data.ferrari.text}
                            className="image twenty-four"
                            data-scroll
                            data-scroll-speed="1.25"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-five">
                    <Link to={data.golfGti.path}>
                        <motion.img
                            src={data.golfGti.src}
                            alt={data.golfGti.text}
                            className="image twenty-five"
                            data-scroll
                            data-scroll-speed="-2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-six">
                    <Link to={data.ferrariTwo.path}>
                        <motion.img
                            src={data.ferrariTwo.src}
                            alt={data.ferrariTwo.text}
                            className="image twenty-six"
                            data-scroll
                            data-scroll-speed="1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-seven">
                    <Link to={data.lamborghiniTwo.path}>
                        <motion.img
                            src={data.lamborghiniTwo.src}
                            alt={data.lamborghiniTwo.text}
                            className="image twenty-seven"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-eight">
                    <Link to={data.corvette.path}>
                        <motion.img
                            src={data.corvette.src}
                            alt={data.corvette.text}
                            className="image twenty-eight"
                            data-scroll
                            data-scroll-speed="2.3"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container twenty-nine">
                    <Link to={data.subaru.path}>
                        <motion.img
                            src={data.subaru.src}
                            alt={data.subaru.text}
                            className="image twenty-nine"
                            data-scroll
                            data-scroll-speed="-0.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty">
                    <Link to={data.dodgeCharger.path}>
                        <motion.img
                            src={data.dodgeCharger.src}
                            alt={data.dodgeCharger.text}
                            className="image thirty"
                            data-scroll
                            data-scroll-speed="-2.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty-one">
                    <Link to={data.fordTasca.path}>
                        <motion.img
                            src={data.fordTasca.src}
                            alt={data.fordTasca.text}
                            className="image thirty-one"
                            data-scroll
                            data-scroll-speed="2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty-two">
                    <Link to={data.mini.path}>
                        <motion.img
                            src={data.mini.src}
                            alt={data.mini.text}
                            className="image thirty-two"
                            data-scroll
                            data-scroll-speed="-2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty-three">
                    <Link to={data.coccinelle.path}>
                        <motion.img
                            src={data.coccinelle.src}
                            alt={data.coccinelle.text}
                            className="image thirty-three"
                            data-scroll
                            data-scroll-speed="1.5"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty-four">
                    <Link to={data.continental.path}>
                        <motion.img
                            src={data.continental.src}
                            alt={data.continental.text}
                            className="image thirty-four"
                            data-scroll
                            data-scroll-speed="-1"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <div className="image-container thirty-five">
                    <Link to={data.jaguar.path}>
                        <motion.img
                            src={data.jaguar.src}
                            alt={data.jaguar.text}
                            className="image thirty-five"
                            data-scroll
                            data-scroll-speed="-2"
                            exit={{clipPath: 'inset(100% 0% 0% 0%)'}}
                            transition={transition}
                        />
                    </Link>
                </div>
                <motion.div
                    className="text-container fancy-three"
                    exit={{opacity: 0}}
                >
                    <span>
                        <motion.span exit={{y: 200}} transition={transition}>
                            mip mip
                        </motion.span>
                    </span>
                </motion.div>
            </motion.div>
            <motion.div
                className="project-details-container"
                data-scroll-section
                exit={{opacity: 0}}
            >
                <p>Le projet Dr1ve est une galerie de voitures créée avec ReactJS, Locomotive Scroll et Framer Motion. Ce projet a été
                    réalisé pour le concours du Discord de l'École du Web. L'objectif de ce projet était de créer une galerie alliant
                    minimalisme et interaction.</p>
            </motion.div>
            <ScrollIndicator/>
        </motion.div>
    );
}
