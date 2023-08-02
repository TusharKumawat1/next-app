"use client"
import { createContext,useState } from "react"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export const TheamContext=createContext();
export const TheamProvider=({children})=>{
    const [theam, setTheam] = useState(<DarkModeIcon/>)
    const [mode, setMode] = useState("dark")
    const toggle=()=>{
        setMode(pre=>pre==="dark"?"light":"dark")
        if(mode==="dark"){
            setTheam(<WbSunnyIcon/>)
        }else{
            setTheam(<DarkModeIcon/>)
        }
    }
    return(<TheamContext.Provider value={{toggle,mode,theam,setTheam}}>
       <div className={`theam ${mode}`}> {children} </div> 
    </TheamContext.Provider>)
}