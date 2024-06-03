import React from 'react'
import style from "./Portfolio.module.css"
import Fade from "react-reveal"


function Portfolio({myTheme}) {
  return (
    <div className={style.container1} data-theme={myTheme}>

    <div className={style.container}>
        <h1 className={style.h1}>Portfolio</h1>
        <Fade left>
        <div className={style["left-box"]}>
        <div className={style["box-info"]}>
            <img src="./image/eccomerce.png" alt="" />
            <h1 className={style.title}>E-commerce </h1>
            </div>
        </div>
        </Fade>
        <Fade right>
        <div className={style["right-box"]}>
            <div className={style["box-info"]}>
            <img src="./image/eccomerce-2.png" alt="" />
            <h1 className={style.title}>E-commerce 2 </h1>

            </div>
        </div>
        </Fade>
        <Fade left>
        <div className={style["left-box"]}>
        <div className={style["box-info"]}>
                <img src="./image/cool-design.png" alt="" />
                <h1 className={style.title}>Home Page Design </h1>

            </div>
        </div>
        </Fade>
        <Fade right>
        <div className={style["right-box"]}>
        <div className={style["box-info"]}>
           <img src="./image/adim.png" alt="" />
           <h1 className={style.title}>Admin Dashboard </h1>

            </div>
        </div>
        </Fade>
        <Fade left>
        <div className={style["left-box"]}>
        <div className={style["box-info"]}>
            <img src="./image/phone.png" alt="" />
            <h1 className={style.title}>iPhone Page Design </h1>

            </div>
        </div>
        </Fade>
        <Fade right>
        <div className={style["right-box"]}>
        <div className={style["box-info"]}>
            <img src="./image/classic.png" alt="" />
            <h1 className={style.title}>Cool Card Design </h1>

            </div>
        </div>
        </Fade>

    </div>
    </div>
  )
}

export default Portfolio