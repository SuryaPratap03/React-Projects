import { useEffect, useState } from "react";

export function useFetch({url,options={}}){

    const[data,setData] = useState({});
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState(null);

    const fetchUrl=async()=>{
        setLoading(true);
        try{
            const response = await fetch(url,{ ...options});
            const d = await response.json();
            console.log(d);
            
            setData(d);
            setError(null);
            setLoading(false);
        }catch(error){
            console.log(error);
            setError(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUrl();
    },[url])

    return {data,loading,error};
}