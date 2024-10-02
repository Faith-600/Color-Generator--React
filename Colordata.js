import { useEffect,useState } from "react";
import rgbToHex from "./Convert";


const  Colordata = ({rgb,weight,index,hexColor}) =>{
    
    const [alert ,setAlert] =useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
       setAlert(false)
        },3000)
    },[alert])
   
    return <article className={`color ${index > 10 && `color-light`}`} style={{backgroundColor:`rgb(${bcg})`}} onClick ={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
    }}>
      <p>{weight}%</p> 
      <p>{hexValue}</p> {
        alert && <p>copied to clipboard</p>
      }
    </article>  
       
    
}

export default Colordata;