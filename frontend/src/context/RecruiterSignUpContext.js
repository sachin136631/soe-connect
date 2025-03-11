import { createContext,useState } from "react";
export const RecruiterSignUpContext=createContext();

export const RecruiterSignUpProvider=({children})=>{
    const [formData,updateformdata]=useState({
        name:"",
        organizationName:"",
        designation:""
    });
    return(
        <RecruiterSignUpContext.Provider value={{formData,updateformdata}}>
            {children}
        </RecruiterSignUpContext.Provider>
    )
}