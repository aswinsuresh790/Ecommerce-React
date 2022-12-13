import React, { useState } from 'react'
import {categories} from '../components/data/data' 
import './Addcart.css'
import I1 from '../Assets/img/i1.png'

const Addcart = () => {
const[category,setCategory]=useState(categories)
const[name,setName]=useState()


const uploadFile=()=>{}

  return (
    <div className='Add-cart-full container  mt-5' >
        <div className='add-box   m-auto text-center'>
            <input type='text' placeholder='Food Title' value={name} onChange={(e)=>setName(e.target.value)} />
            {console.log(name) }
            <div className='p-3'>
                <select className='selectoption' onChange={(e)=>setCategory(e.target.value)} value="Select Type" >
                    <option className= 'option ' >Select Catagory</option>
                    {category.map(item=>
                        <option >{item. urlParamName}</option>)   }
                </select>

                {/* select option for  select different catagory of food  .Data file is collection of different type are mentioned so fetech from that are show the options  */}
            </div>
            <div className='image-container  '>
<div className='image-des '>

    <p  className='text-center'>Upload Image</p>
    <div>
<input  className='image-input' type="file" accept="image/*" onChange={uploadFile}></input>
    </div>
    <div className='image-display position-relative'> 
    <img classname="imagescreen position-absolute" src="" alt=""></img>

    <button className='deletebutton bg-danger' ></button>

    
    
    </div>

</div>
            </div>
            <div className='calories mt-4 '>
                <input className='calories-text' type="text"  placeholder='Calories' ></input>
            </div>     
            <div className='price mt-4 '>
                <input className='price-text' type="text"  placeholder='Price' ></input>
            </div>    
            <div className='button-save mt-4'>
                <button className=' save-btn btn btn-success bg-success'>Save</button>
            </div>
            
        </div>
       
      
    </div>
  )
}

export default Addcart
