import React, {useState} from 'react'
import "./Navbar.css"
import {Link, NavLink} from "react-router-dom"
import Fade from "react-reveal"
import {HiMenu} from "react-icons/hi"
import {GrClose} from "react-icons/gr"
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"
// import { useEffect } from 'react'

function Navbar({myTheme, ontoggleTheme, lightModeOn}) {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // const [color, setColor] = useState(false)


  // const handleColor = () => {
  //   if(window.scrollY >= 100){
  //     setColor(true)
  //   }else{
  //     setColor(false)
  //   }
  // }

  // window.addEventListener("scroll", handleColor)


  // useEffect(() => {
  //   setTimeout(() => {
  //     setColor(false)
  //   },5000)

  // },[color])

  return (
    <Fade top>

    <nav data-theme={myTheme} >
        <h1><Link id='link-h1' to="/">Y. Waris</Link></h1>
        <div className={`nav-link ${showMenu ? "show-nav-link" : "hide-nav-link"}`} >
        <NavLink className="link" onClick={() => setShowMenu(false)} to="/">Home</NavLink>
        <NavLink className='link' onClick={() => setShowMenu(false)} to="/about">About Me</NavLink>
        <NavLink className='link' onClick={() => setShowMenu(false)} to="/portfolio">Portfolio</NavLink>
        <NavLink className='link' onClick={() => setShowMenu(false)} to="/service">Service</NavLink>
        <NavLink className='link' onClick={() => setShowMenu(false)} to="/contact">Contact Me</NavLink>

        </div>
        <div className="menu" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <GrClose className={lightModeOn ? "close-c" : "close"} color={lightModeOn ? "white" : "baclk"} size={30}/>
           :  <HiMenu color={lightModeOn ? "white" : "black"} size={30}/>}
        </div>

        <div className='dark-mode' onClick={() => setDarkMode(!darkMode)}>
          <div onClick={ontoggleTheme}>

          {lightModeOn ? <BsFillMoonFill size={30}
            color={lightModeOn ? "white" : "black"}/>
             : <BsFillSunFill size={30} color={lightModeOn ? "white" : "black"}/> }
          </div>
        </div>
    </nav>
    </Fade>
  )
}

export default Navbar