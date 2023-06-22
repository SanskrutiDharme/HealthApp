import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";

const ShowHealthData = () => {
    const healthContext:any = useContext<any>(mainContext)
    
    const {healthData } = healthContext
    console.log ('healthData',healthData)
    
    return (
        <div>
            ShowHealthData.tsx
        </div>
    )
   
};

export default ShowHealthData;