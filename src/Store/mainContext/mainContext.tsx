import { createContext, useState } from "react";

const mainContext:any = createContext({
    healthData: []

});


const initialState = [
    {
        id: 0,
        Name: 'XYZ',
        HR: 100,
        SBP:231,
        DBP:123,
        Sugar:451,
        Cal:123,
        Spo2:123

    },

    {
        id: 1,
        Name: 'pqr',
        HR: 102,
        SBP:123,
        DBP:153,
        Sugar:151,
        Cal:162,
        Spo2:133

    },
]



export const MainContextWrapper:React.FC<any>= (props) => {
    const[healthData , setHealthData] = useState([initialState]);
    return( 
         <mainContext.Provider value = {
            {
                healthData: healthData,
                setHealthData: setHealthData
            }
         }>
            
            {props.children}

         </mainContext.Provider>
    )
}

export default mainContext
