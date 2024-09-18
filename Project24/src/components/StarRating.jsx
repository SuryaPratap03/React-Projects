import React,{useState} from 'react'
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const arr = Array.from({ length:12 });
    const [hover, setHover] = useState(0);
    const [clicked,setClicked] = useState(0);

    const handleClick=(currentindex)=>{
        setClicked(currentindex);
    }

    const handleEnter=(currentindex)=>{
        setHover(currentindex);
    }

    const handleLeave=(currentindex)=>{
        setHover(0);
    }
  return (
    <div className='flex items-center justify-center gap-1'>
        {
            arr.map((_,index) =>{
                index +=1;
                return <FaStar 
                key={index} 
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleEnter(index)}
                onMouseLeave={()=>handleLeave(index)}
                className={` size-12 ${index<= hover|| index<=clicked ? 'text-yellow-500' : 'text-gray-200'}`} />
                    
                
            })
        }

    </div>
  )
}

export default StarRating