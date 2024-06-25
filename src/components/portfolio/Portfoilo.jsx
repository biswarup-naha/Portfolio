import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import todo from "../../../public/todo.png";
import mf from "../../../public/movieflix.png";
import tk from "../../../public/tk.png";
import knmp from "../../../public/knmp.png";
import ehms from "../../../public/ehms.png";

const items = [
  {
    id: 1,
    title: "MERN todo app",
    img: todo,
    desc: "This is a simple todo application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack which demonstrates CRUD operations. The user can create, edit and remove todos at their will.",
    link: "https://t0d0-app789.netlify.app/",
  },
  {
    id: 2,
    title: "Aarogya: e-HMS",
    img: ehms,
    desc: "A cutting-edge platform designed to revolutionize healthcare delivery and management. Built with the powerful MERN stack and AI/ML integration, our system ensures a seamless and efficient experience for both healthcare providers and patients.",
    link: "https://e-healthcare-management-system.vercel.app/",
  },
  {
    id: 3,
    title: "Movieflix",
    img: mf,
    desc: "Movieflix is an online database that contains information and statistics about movies. It allows users to explore movies, view their details, and perform various operations such as sorting and filtering. This project is built using the MERN stack (MongoDB, Express.js, React, and Node.js).",
    link: "https://movie-flix-ochre.vercel.app/",
  },
  {
    id: 4,
    title: "SIH 2023",
    img: knmp,
    desc: "A website backed by a centralised database for all the Nasha Mukti Kendra's in India. It provides real-time analytics and serves the purpose of MoSJE.",
    link: "https://github.com/The15thSin/nmdb-sih",
  },
  {
    id: 5,
    title: "vanilla-JS Tic-Tac-Toe",
    img: tk,
    desc: "This is a simple Tic Tac Toe game implemented in HTML, CSS, and JavaScript. The game allows two players to take turns marking the spaces in a 3x3 grid to achieve a row, column, or diagonal of their symbol ('X' or 'O'). The scores are saved in local storage.",
    link: "https://main--coruscating-queijadas-3d794b.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="blank">See Demo</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.h1 whileHover={{ color: "#A33356" }}>Featured Works</motion.h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
