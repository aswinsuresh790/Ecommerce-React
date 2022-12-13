import React from 'react'
import './Home.css'
import Herobg from '../Assets/img/heroBg.png'
import I1 from '../Assets/img/i1.png'
import r1 from '../Assets/img/r2.png'
import c1 from '../Assets/img/cu3.png'
import d1 from '../Assets/img/d1.png'
import f1 from '../Assets/img/f1.png'
import k1 from   '../Assets/img/c4.png'
import k2 from   '../Assets/img/c6.png'

const Home = () => {
const fooditem=[{
  Type:"Ice Cream",price:100,Des: "Chocolate ",Img:I1,
}, {
  Type:"Biriyani",price:180,Des: "Rice item",Img:r1,
}, {
  Type:"Stewberry",price:100,Des: "Fruit",Img:f1,
},{
  Type:"Red Bull",price:120,Des: "Drink",Img:d1,
},{
Type:"Mommos",price:220,Des: "Fry",Img:k1,
},{
  Type:"kabbeb",price:280,Des: "Fry",Img:k2,
  },
]



  return (
    <div className='container-fluid'>
    <div className='row d-flex justify-content-between'>
       <div className='text-leftside  py-2     col-sm-5 col-md-6 px-md-2  col-lg-6  col-xl-6   col-xxl-6  '>
        <div className='bike-delivary'><h5 className='bg-opacity-50'>Bike Delivary</h5>
        <h1 ><b>City's Fatest Delivary App </b> </h1>
        <h1 className='hungry f-1.5rem'><b>Are you </b><span> HUNGRY?</span></h1>
        <h2><b>Book Your Choice</b></h2>
        </div>
       </div>
       {/* leftside of the page about delivary  set all the breakpoint for all devices  */}
     
      
   
        <div className='rightbox   col-sm-7 col-md-6  col-lg-6  col-xl-6   col-xxl-6 position-relative '>
          <img className='  col-sm-10 col-md-10  col-lg-10  col-xl-10   col-xxl-10' src={Herobg}/>
          <div  className='full-food-item   position-absolute top-0 d-flex  flex-row flex-wrap justify-content-around  '>
         { fooditem.map((item)=>
         
         
            <div className='card-food   top-0 left-0 w-auto h-auto d-flex flex-colunm flex-wrap justify-content-between   '>
                <img className='card-img position-relative' src={item.Img}  alt="dd"></img>
                <div className='right-card bg-light   bg-opacity-0 p-1   '>
                <p className='text-center'>{item.Type} </p>
                <p className='text-center'>{item.Des}</p>
                <p className='text-center'>Rs{item.price}</p>
                </div>
                
                
                
            </div >)}
            </div>
            </div>


    </div>
    </div>
  )
}

export default Home
