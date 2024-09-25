import { useEffect, useState } from "react";

export default function UseWindowResize(){
    const[windowSize,setWindowSize] = useState({
        height : 0,
        width : 0,
    })
    function changedimensions(){
        setWindowSize({
            height:window.innerHeight,
            width:window.innerWidth,
        })
    }
    useEffect(()=>{
        changedimensions();
        window.addEventListener('resize',changedimensions);

        return (()=>{
            window.removeEventListener('resize',changedimensions);
        })
    },[])

    useEffect(()=>{
        console.log('windowSize is ',windowSize);

    },[windowSize]);

    return <>
         <h1>{`Height is `+windowSize.height}</h1>
         <h1>{`Width is `+windowSize.width}</h1>
    </>
}
