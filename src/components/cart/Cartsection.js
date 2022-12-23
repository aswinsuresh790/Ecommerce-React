import './cartsection.css'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {RiRefreshFill} from 'react-icons/ri'
import {motion} from 'framer-motion'
import C1 from '../../Assets/img/c1.png'
import {AiOutlineMinus,AiOutlinePlus}  from 'react-icons/ai'
const Cartsection = () => {
  return (
    <div className='cartsection'>
          
             <div className='cart-heading2 text-center d-flex '>
             <motion.div whileTap={{scale:0.80}}><BiArrowBack  size={35}/></motion.div>
            <motion.div  ><h4>Cart</h4></motion.div>
           <motion.div whileTap={{scale:0.80}}>  <h4><button className='clear-btn'>Clear<RiRefreshFill/></button></h4></motion.div>
           </div>
<div className='cart-main'> 
    <div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus  size={20}/></motion.div>
     </div>

</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus  size={20}/></motion.div>
     </div>




</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus  size={20}/></motion.div>
     </div>




</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>



<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>


<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>

<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>





</div>


<div className='cart-items'>
    <div><img className='item-img' src={C1}/></div>
    <div className='item-desc'><p>Chicken Kadai</p>
    <p>Rs 100</p>

     </div>
     <div className='quantity d-flex'>
       <motion.div   whileTap={{scale:1.2}}><AiOutlineMinus  size={20}/> </motion.div> &nbsp; 1 &nbsp;<motion.div whileTap={{scale:1.2}}    ><AiOutlinePlus size={20}/></motion.div>
     </div>




</div>





</div>

<div className='price-details'>
<div className='product-price d-flex justify-content-around'>
    <div>Sub Total</div>
    <div>Rs 100</div>
</div>
<div  className='delivary  d-flex justify-content-around'>
    <div>Delivary </div>
    <div>Rs 30</div>
</div>


<div className='border-total '></div>
<div  className='delivary  d-flex justify-content-around'>
    <div>Total</div>
    <div>Rs 130</div>
</div>
<div className='button-check1'>
<button className= 'button-check  btn btn-success  m-auto'>Check Out</button>
</div>
</div>

    </div>
  )
}

export default Cartsection
