import React, { useRef } from "react"
import classesStyle from '../models/styles/FooterButton.module.scss'
import useVisible from '../lib/useVisible'
export const FooterButtonCarousel : React.FC = ()=> {
  const span1 = useRef();
  const span2 = useRef();
 return(<>
   <div className= {classesStyle.btn_container}>
     <button className= {classesStyle.btn} onClick={()=> useVisible(span1.current,span2.current)}><span className= {`${classesStyle.span1} ${classesStyle.visible}`} ref={span1}>Čekáme na váš životopis</span>  <span className= {classesStyle.span1} ref={span2}>shchepkova.solar@gmail.com</span>  </button>
   </div>
 </>)
}