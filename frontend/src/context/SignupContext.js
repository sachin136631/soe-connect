// context api for student signup which stores data globally for easy navigation
import { createContext,useState } from "react";

export const SignupContext=createContext();

export const SignupProvider=({children})=>{
    const [formData,setformData]=useState({
        name:"",
        branch:"",
        email:"",
        year:""
    });
    return(
        <SignupContext.Provider value={{formData,setformData}}>
            {children}
        </SignupContext.Provider>
    )
}