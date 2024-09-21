import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,defaultValue) => {
    const [value,setValue] = useState(()=>{
        let currentvalue;
        try{
            let item = localStorage.getItem(key);
            currentvalue = item?JSON.parse(item):JSON.stringify(defaultValue);
        }catch(error){
            console.log(error);
            currentvalue = defaultValue;  
        }
        return currentvalue;
    });

    useEffect(()=>{
        localStorage.setItem(key,value);
    },[value,key])

    return [value,setValue]
}

export default useLocalStorage