import React from "react";
import './modal.css'


const Modal =({children, customClass, show, closeCallBack})=>(
  <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none'}}>
  <div className="overlay" onClick={closeCallBack}></div>
  <div className="modal_content">
    {children}
    <button title="Close" className="close_modal" onClick={closeCallBack}>
      back
    </button>
  </div>
</div>
)


export default Modal