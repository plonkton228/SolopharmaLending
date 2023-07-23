import classesStyle from '../models/styles/FooterButton.module.scss'
const useVisible = (span1 : HTMLSpanElement, span2 : HTMLSpanElement) => {

if(span1.classList.contains(classesStyle.visible)){
    span1.classList.remove(classesStyle.visible)
    span2.classList.add(classesStyle.visible)
}else {
    span1.classList.add(classesStyle.visible)
    span2.classList.remove(classesStyle.visible)
}
   
}

export default useVisible

