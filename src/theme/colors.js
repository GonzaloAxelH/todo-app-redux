import theme from "styled-theming";
const set = (light,dark=null) => theme("theme",{light,dark:!dark ? light : dark})




export const backgroundColor = set("#1a3785","#fff");
export const textColor = set("#fff","#1a3785")
export const textColorItem = set("#1a3785","#fff")
export const backgroundColorItem = set("#fff","#1a3785");
