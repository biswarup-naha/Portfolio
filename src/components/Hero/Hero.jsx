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

const CV_url =
  "https://662e9ec9cd933b06870a3d4a--gleeful-licorice-37437f.netlify.app//Resume.pdf";
const blog_url = "https://biswa-dev.hashnode.dev/";

function Hero() {

  const blogLink=(url)=>{
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.target="_blank";
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

    const downloadCv=(url)=>{
        const fileName=url.split('/').pop()
        const aTag=document.createElement('a')
        aTag.href = url;
        aTag.setAttribute('download',fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="txtContainer"
          variants={txtVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={txtVariants}>Biswarup Naha</motion.h2>
          <motion.h1
            variants={txtVariants}
            whileHover={{
              background: "pink",
              color: "#9E3469",
              textShadow: "0 0 20px pink, 0 0 10px pink, 0 0 5px pink",
            }}
          >
            Web developer
          </motion.h1>
          <motion.div className="buttons">
            <motion.button variants={txtVariants} onClick={()=>blogLink(blog_url)}>
              See latest blog
            </motion.button>
            <motion.button
              variants={txtVariants}
              onClick={() => {
                downloadCv(CV_url);
              }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: 100 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            variants={txtVariants}
          >
            <BsFileArrowDown className="scroll-down" size={40} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTxt"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>
      <div className="imgContainer">
        <img src={myImage} alt="" />
      </div>
    </div>
  );
}

export default Hero