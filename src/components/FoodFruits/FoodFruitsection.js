import React, { useEffect, useState } from 'react'
import "./Foodfruitsection.css"
import {MdChevronRight,MdChevronLeft} from "react-icons/md"
import Fruitcontent from './Fruitcontent'
import {useStateValue} from '../../redux/StateConttext'
import SelectFrom from './SelectFrom'



const FoodFruitsection = () => {
  const [{fooditem,cartshow},dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  return (
    <div className='food-section-fruit col-sm-12 col-md-12 px-md-12  col-lg-12  col-xl-12   col-xxl-12  '>
<section>
    <div className='food-fruit-heading container bg-yellow '>

<h3>Fresh Fruits and Healthy Foods</h3>

    </div>
<div className='button-swipe d-flex'>
<div className='swipe-button2  m-1 p-1' onClick={() => setScrollValue(-1000)}> <MdChevronLeft size={35}/></div>
<div className='swipe-button2  m-1 p-1' onClick={() => setScrollValue(1000)}> <MdChevronRight  size={35}/></div>
</div>
</section>

<Fruitcontent scrollValue={scrollValue} flag={true} data={fooditem?.filter((n)=>n.category==="fruits")}   />
   <div><SelectFrom/></div>
   </div>

  )
}

export default FoodFruitsection
