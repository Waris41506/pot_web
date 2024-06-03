import React from 'react'
import { Fade } from 'react-reveal'
import style from "./Home.module.css"
import {FaYoutube, FaFacebookF} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {Link} from "react-router-dom"


function Home({myTheme}) {
  return (
    <div className={style.container1} data-theme={myTheme}>
    <div className={style.container} >
      <Fade left>
        <div className={style["home-info"]}>
            <h1>I'm Waris</h1>
            <h2>Web Developer</h2>
            <p>I'm Creative Web Design <br/> And High-Quality Developer Of Site At
             The Professional Level.<br/>
              I always look for opportunities to advance my skills both academically and in workforce through 
              professional experience such as Internship, Research 
              project and job opportunities. </p>
            
            <div>
            <button className={style.btn} ><a href="./image/WARIS-Resume.pdf" download>Download CV</a></button>
            <button className={style.btn}><Link to="./contact">Hire Me</Link></button>
            </div>
        </div>
      </Fade>
      <Fade right>
        <div className={style["img-box"]}>
            <img src="./image/waris-pic.png" alt="" />
            <div className={style["icon-box"]}>

            <div className={style.icon}>
              <a href="https://www.youtube.com/channel/UClAYL0ddshGw9GFiDeEK_pg">
              <FaYoutube color="red" size={30}/>

              </a>
            </div>
            <div className={style.icon}>
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <FaFacebookF color="blue" size={30}/>

              </a>
            </div>
            <div className={style.icon}>
              <a href="linkekin.com/in/yusuff-waris-911a3b254 ">
              <AiOutlineLinkedin color="blue" size={30}/>

              </a>
            </div>
            <div className={style.icon}>
              <a href="https://twitter.com/yusuffwaris75">
              <BsTwitter color="blue" size={30}/>

              </a>
            </div>
            </div>
        </div>

      </Fade>
    </div>
    </div>
  )
}

export default Home