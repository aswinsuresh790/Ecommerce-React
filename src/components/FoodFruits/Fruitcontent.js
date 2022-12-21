import React, { useEffect, useRef } from 'react'
import './fruitcontent.css'
import k1 from '../../Assets/img/i1.png'
import {FaShoppingBag} from "react-icons/fa"
import { motion } from 'framer-motion';



const Fruitcontent = ({data, scrollValue }) => {
  const Fruitcontent = useRef();

  useEffect(() => {
    Fruitcontent.current.scrollLeft += scrollValue;
  }, [scrollValue]);

 
  return (

   
         
         <div className='cardsq d-grid'    ref={Fruitcontent}>
     {data && data.map((item,index) =>           
  (<div className="rowm ">
  <div className="">
    <div className="cardm">
    <motion.img  whileHover={{ scale: 1.2 }} className="card-imgm" key={index} src={item?.imagelocation} />
      <div className="card-bodym">
      
        <p className="card-textm text-center position absolute">{item?.name}</p>
        <p className="text-center m"><span style={{color:"red",}}>Rs</span> {item?.price}</p>
        <a href="#" className="btn btn-primary text-center"><FaShoppingBag/></a>
      </div>
    </div>
  </div>
  </div>))
   }     
      

    </div>  
  
    
    
      )
}

export default Fruitcontent
