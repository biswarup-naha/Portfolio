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
        <Sidebar/>
        <div className="wrapper">
            <motion.span
              initial={{opacity:0,scale:0.5}}
              animate={{opacity:1,scale:1}}
              transition={{duration: 0.5}}
            >
              Babes
            </motion.span>
            <div className="social">
                <a href=""><img src={ln} alt="" /></a>
                <a href=""><img src={github} alt="" /></a>
                <a href=""><img src={insta} alt="" /></a>
                <a href=""><img src={discord} alt="" /></a>
                <a href=""><img src={wp} alt="" /></a>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar;