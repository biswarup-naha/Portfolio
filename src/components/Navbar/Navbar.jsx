import './Navbar.scss'
import discord from '../../assets/discord.png'
import insta from '../../assets/insta.png'
import github from '../../assets/github.png'
import ln from '../../assets/ln.png'
import wp from '../../assets/wp.png'
import Sidebar from '../Sidebar/Sidebar'
import {motion} from 'framer-motion'

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Babes */}
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/biswarup-naha-1a3aa4137/">
            <img src={ln} alt="" />
          </a>
          <a href="https://github.com/biswarup-naha/">
            <img src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/earthface.exe/">
            <img src={insta} alt="" />
          </a>
          <a href="https://wa.link/x8z2df">
            <img src={wp} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;