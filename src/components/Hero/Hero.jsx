import myImage from "../../assets/me.png";
import './Hero.scss';
import { BsFileArrowDown } from "react-icons/bs";
import {motion} from 'framer-motion';

const txtVariants={
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
};

const sliderVariants={
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
};

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="txtContainer" variants={txtVariants} initial="initial" animate="animate">
                <motion.h2 variants={txtVariants}>Biswarup Naha</motion.h2>
                <motion.h1 variants={txtVariants}>Web developer</motion.h1>
                <motion.div className="buttons">
                    <motion.button variants={txtVariants} >See my latest works</motion.button>
                    <motion.button variants={txtVariants} >Contact me</motion.button>
                </motion.div>
                
                <motion.div
                    initial={{opacity: 1, y: 0}}
                    animate={{opacity: 0, y: 100}}
                    transition={{duration: 2, ease: "easeInOut", repeat: Infinity}}
                    variants={txtVariants}
                >
                    <BsFileArrowDown className="scroll-down" size={40} />
                </motion.div>
                
            </motion.div>
        </div>
        <motion.div className="slidingTxt" variants={sliderVariants} initial="initial" animate= "animate" >
            Web Developer
        </motion.div>
        <div className="imgContainer">
            <img src={myImage} alt="" />
        </div>
    </div>
  )
}

export default Hero