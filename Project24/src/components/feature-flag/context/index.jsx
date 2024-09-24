import { createContext, useEffect, useState } from "react";
import featureFlagsDataService from "../data";

export const FeatureFlagContext = createContext(null);
export const FeatureFlagProvider =({children})=>{
    const [allComponents,setAllComponents] = useState(null);
    const [loading,setLoading] = useState(true);
    const featureFlagApiCall=async()=>{
        try{
            const response = await featureFlagsDataService();
            const data = await response;
            setAllComponents(data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
            throw new Error(error);
        }
    }
    
    useEffect(()=>{
        featureFlagApiCall();
    },[])

    return <FeatureFlagContext.Provider value={{allComponents,loading}}>
        {children}
    </FeatureFlagContext.Provider>
}
