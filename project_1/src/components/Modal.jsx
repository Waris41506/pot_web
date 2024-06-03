import React from 'react'
import style from "./Modal.module.css"

function Modal({closeModal}) {
  return (
    <div className={style.container} onClick={closeModal}>
        <div className={style.box}>
            <h1>Succeed ✔ !!!</h1>
            <h3>Your Message has been successfully sent,</h3>
            <h3>Nice to hear from you 👍</h3>
            <span onClick={closeModal}>X</span>
            <button>Dismiss</button>
        </div>
    </div>
  )
}

export default Modal