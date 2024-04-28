import "./services.scss";
import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";


const variants={
  initial:{
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate:{
    x:0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}

const Services = () => {

  const ref=useRef()
  const isInView=useInView(ref,{margin: "-100px"})

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on growing my skills
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#9E3458" }}>
              Services
            </motion.b>{" "}
            <span style={{ color: "#f89" }}>Provided</span>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{
            background: "pink",
            color: "#9E3469",
            boxShadow: "0 0 20px pink, 0 0 10px pink, 0 0 5px pink",
          }}
        >
          <h2>Frontend</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            saepe totam distinctio quo qui voluptatum placeat ipsa nostrum! Non
            sit molestias dicta ipsum error. Quo, dignissimos velit. Sequi, sit!
            Dicta.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "pink",
            color: "#9E3469",
            boxShadow: "0 0 20px pink, 0 0 10px pink, 0 0 5px pink",
          }}
        >
          <h2>Backend</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            saepe totam distinctio quo qui voluptatum placeat ipsa nostrum! Non
            sit molestias dicta ipsum error. Quo, dignissimos velit. Sequi, sit!
            Dicta.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "pink",
            color: "#9E3469",
            boxShadow: "0 0 20px pink, 0 0 10px pink, 0 0 5px pink",
          }}
        >
          <h2>UI/UX design</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            saepe totam distinctio quo qui voluptatum placeat ipsa nostrum! Non
            sit molestias dicta ipsum error. Quo, dignissimos velit. Sequi, sit!
            Dicta.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
