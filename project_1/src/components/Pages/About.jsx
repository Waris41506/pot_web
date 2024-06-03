import React from 'react'
import style from "./About.module.css"
import Fade, { Zoom } from "react-reveal"
import {FaBloggerB} from "react-icons/fa"


function About({myTheme}) {
  return (
    <div className={style.container1} data-theme={myTheme}>

    <div className={style.container}>
        <div className={style.info}>
        <h1 className={style.h1}>About Me</h1>
        <h3>I'm Yusuff Waris, A Web Developer</h3>
        <p>I always look for opportunities to advance my skills both academically and in workforce through 
professional experience such as Internship, Research project and job opportunities. 
 To date I possess little work experience but I strive to contribute positively to any place I find 
myself, one of my objectives is to secure a position in a dynamic organization where can use my skills and 
knowledge to develop my career as well as help the company grow. I love and welcome creative 
challenges. </p>

        </div>
        <Fade top>
        <div className={style["about-info"]}>
            <div className={style.first}>
            <h3>Birthday: <span>1 July 2002</span></h3>
            <h3>City: <span>Ibadan,Nigeria</span></h3>
            <h3>Freelance: <span>Available</span></h3>

            </div>
            <div className={style.second}>
            <h3>Age: <span>20</span></h3>
            <h3>Email: <span>Yusuffwaris8@gmail.com</span></h3>
            <h3>Phone: <span>080 5108 5595</span></h3>

            </div>
            <div className={style.third}>
                <h3>CSS <span>87%</span></h3>
                <h3>HTML <span>95%</span></h3>
                <h3>JAVASCRIPT <span>65%</span></h3>
                <h3>REACT JS <span>40%</span></h3>
            </div>

        </div>
        </Fade>

        <div className={style.exprience}>
          <Zoom clear >
          <div className={style["left-side"]}>
            <h2>Experience</h2>
            <hr />
            <div className={style["in-info"]}>
            <FaBloggerB className={style.icon} color="blue" size={25}/>


            <h4>2020-2021</h4>
            <h3> Frontend Developer</h3>
            <p>Lorem, ipsum amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>

            <div className={style["in-info"]}>
              <FaBloggerB className={style.icon} color="blue" size={25}/>
            <h4>2020-2021</h4>
            <h3> Backend Developer</h3>
            <p>Lorem, ipsum dolor amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>

            <div className={style["in-info"]}>
            <FaBloggerB className={style.icon} color="blue" size={25}/>

            <h4>2021-2022</h4>
            <h3> Full Stack Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>

          </div>

          </Zoom>
          <Zoom clear >
          <div className={style["right-side"]}>
            <h2>Education</h2>
            <hr />
          <div className={style["in-info"]}>
            <FaBloggerB className={style.icon} color="blue" size={25}/>


            <h4>2020-2021</h4>
            <h3> Master in Computer Science</h3>
            <p>Lorem, ipsum amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>

            <div className={style["in-info"]}>
              <FaBloggerB className={style.icon} color="blue" size={25}/>
            <h4>2020-2021</h4>
            <h3>Master in Computer Science</h3>
            <p>Lorem, ipsum dolor amet consectetur adipisicing elit sit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>

            <div className={style["in-info"]}>
            <FaBloggerB className={style.icon} color="blue" size={25}/>

            <h4>2021-2022</h4>
            <h3>Master in Computer Science</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Aliquid, omnis.</p>
            </div>
          </div>
            
          </Zoom>

        </div>

        
    </div>
    </div>
  )
}

export default About