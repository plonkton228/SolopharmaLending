import React, { useEffect } from "react"
import { useState } from "react"
import { MobileType } from "shared/models/types/MobileType"
import  classesStyle from 'widgets/Navbar/ui/styles/Header.module.scss'

const click = (ref : HTMLDivElement, ref1 : HTMLDivElement, ref2 : HTMLDivElement, ref3 : HTMLDivElement)=> {
    ref1.classList.toggle(`${classesStyle.open}`) 
    ref2.classList.toggle(`${classesStyle.open}`) 
    ref3.classList.toggle(`${classesStyle.open}`) 
    if( ref.classList.contains(`${classesStyle.open}`)){
        ref.classList.add(`${classesStyle.close}`)
        ref.classList.remove(`${classesStyle.open}`)
    }else {
        ref.classList.add(`${classesStyle.open}`)
        ref.classList.remove(`${classesStyle.close}`)
    }
 }

export const useNavBar = (ref : HTMLDivElement, ref1 : HTMLDivElement, ref2 : HTMLDivElement, ref3 : HTMLDivElement) => {
    click(ref,ref1, ref2, ref3)
}