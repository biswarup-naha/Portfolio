import { useCallback, useEffect } from "react";
import "./About.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

      useEffect(() => {
        AOS.init({
          duration: 1000, // Duration for animations
        });
      }, []);

   return (
    <div className="about-me">
      <div className="header" data-aos="fade-in">
        <h1>About Me</h1>
      </div>

      <div className="bio" data-aos="fade-up">
        <p>
          I'm currently pursuing my Bachelors of Engineering degree in Information Technology  from
          University Institute of Technology, Burdwan. Learning and getting myself better from the mistakes
          I make is what drives me to keep upskilling myself. I'm an aspiring full-stack web
          developer, currently experienced with MERN stack.
        </p>
      </div>

      <div className="hobbies" data-aos="fade-up">
        <h3>Hobbies</h3>
        <p>
          In my free time, I enjoy playing computer games, photography, and exploring new technologies.
          I'm also an avid manga reader and love to watch anime.
        </p>
      </div>
    </div>
  );

};

export default About;
