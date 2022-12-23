import './selectfrom.css'
import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import {categories} from '../data/data'
import Fruitcontent from './Fruitcontent'
import { useStateValue } from '../../redux/StateConttext'

const SelectFrom = () => {

  const[{fooditem},dispatch]=useStateValue()
  const[filter,setFilter]=useState("Chicken")
  return (
    <div  className="heading-select-from">
<h2 className='text-center'>Our Hot Dishes</h2>      
    <div className="category-box d-flex ">
    {categories && categories.map((item)=>
    (<div className='searchfilter-box' onClick={()=>setFilter(item.urlParamName)}    >
        <div className='innerbox' onClick={()=>setFilter(item.urlParamName)} > <IoFastFood className='text-center m-4' size={39}/></div>
        <h4 className='categoriess' onClick={()=>setFilter(item.urlParamName)}>{item.urlParamName}</h4>
    </div>)
    )}
    </div>
    
    
    <div className='content-list d-flex flex-wrap'> <Fruitcontent className="d-flex flex-wrap" flag={false} data={fooditem?.filter((n)=>n.category===filter)}/></div>
    </div>

  )
}

export default SelectFrom
