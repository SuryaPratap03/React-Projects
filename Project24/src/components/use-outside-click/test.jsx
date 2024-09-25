import { useRef, useState } from "react"
import useOutsideClick from ".";


export default function UseOnClickOutsideTest(){
    const ref = useRef();
    useOutsideClick(ref,()=>setShowContent(false));
    console.log(ref);
    
    const[showContent,setShowContent] = useState(false);

    return <div>
        {
            showContent ? <div ref={ref}>
                <h1>This is a Random Content</h1>
                <p>Please Click Outside of this to close this . It won't close if you click inside it.</p>
            </div>:<button onClick={()=>setShowContent(true)}>Show Content</button>
        }
    </div>
}