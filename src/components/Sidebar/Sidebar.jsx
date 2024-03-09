import { useState } from 'react'
import './Sidebar.scss'
import ToggleButton from './ToggleButton/ToggleButton'
import Links from './links/Links'
import {motion} from 'framer-motion'



function Sidebar() {
    const [open,setOpen]=useState(false)

    const variants={
    open:{
        clipPath:  "circle(1200px at 50px 50px)",
        transition:{
            // delay:0.2,
            type:"Spring",
            stiffness:20,
        }
    },
    closed:{
        clipPath:  "circle(30px at 50px 50px)",
        transition:{
            delay:0.1,
            type:"Spring",
            stiffness:400,
            damping:40
        }
    }
}
  return (
    <motion.div className='sidebar' animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/> 
    </motion.div>
  )
}

export default Sidebar