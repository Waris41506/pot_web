import React from 'react'
import style from "./Service.module.css"
import { Zoom } from 'react-reveal'
import {AiOutlineAppstoreAdd} from "react-icons/ai"
import {GrGraphQl} from "react-icons/gr"
import {SiAntdesign} from "react-icons/si"
import {IoLogoBuffer} from "react-icons/io"

function Service({myTheme}) {
  return (
    <div className={style.container1} data-theme={myTheme}>

    <div className={style.container}>
        <h1 className={style.h1}>Services</h1>
        <div className={style["service-info"]}>
            <Zoom  clear>
            <div className={style.service1}>
              <h3 className={style.h33}>{"< >"}</h3>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>
            </div>
            </Zoom>
            <Zoom clear>
            <div className={style.service2}>
            <h3 className={style.h33}>{"</>"}</h3>
            <h3>Web Developer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>

            </div>
            </Zoom>
            <Zoom clear>
            <div className={style.service3}>
            <AiOutlineAppstoreAdd color="orangered" size={30}/>
            <h3>App Developer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>

            </div>
            </Zoom>
            <Zoom clear>
            <div className={style.service4}>
              <GrGraphQl color='orangered' size={30}/>
            <h3>Graphics Designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>

            </div>
            </Zoom>
            <Zoom>
            <div className={style.service5}>
              <SiAntdesign color="orangered" size={30}/>
            <h3>UI / UX</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>

            </div>
            </Zoom>
            <Zoom clear>
            <div className={style.service6}>
              <IoLogoBuffer color="orangered" size={30}/>
            <h3>Logo Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto sint ducimus quo porro dolores amet aliquid optio quos iusto.</p>

            </div>
            </Zoom>
        </div>
    </div>
    </div>
  )
}

export default Service