import React, { useState } from 'react'
import {categories} from '../components/data/data' 
import './Addcart.css'
import I1 from '../Assets/img/i1.png'
import {Storage} from "../firebase/index"
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { savedatas } from '../firebase/firestore'

const Addcart = () => {
const[category,setCategory]=useState(categories )
const[name,setName]=useState()
const[calorie,setCalorie]=useState("")
const[price ,setPrice]=useState("")
const[imagelocation,setImagelocation]=useState(null)
const[isloding ,setIsloading]=useState(false)
const[msg,setMsg]=useState(null)
const[field,setField]=useState(false)



const uploadFile=(e)=>{
setIsloading(true)
    const uploadfiles=  e.target.files[0]
console.log(uploadfiles) 
const storageRef=ref(Storage,`image/${Date.now()}-${imagelocation-name}`)
const uploadProgess=uploadBytesResumable(storageRef,uploadfiles)
uploadProgess.on("state change",(snapshot)=>{
const uploadresult=(snapshot.bytesTransferred/snapshot.totalBytes) *100

},
(error)=>{
    console.log(error)
},
()=>{
    getDownloadURL(uploadProgess.snapshot.ref).then(downloadUrl=>{
        setImagelocation(downloadUrl)

    })
}
)


}
const deleteImage=()=>{
    setIsloading(true)
    const deleteref=ref(Storage,imagelocation)
    deleteObject(deleteref).then(()=>{
        setImagelocation(null)
        isloding(false)
    }
     )   
    

}
const savedata=()=>{
    setIsloading(true)
    try{
if(!name && !calorie && !price && !imagelocation){
    console.log("Not possible")

}
else{
    const data={
        id:Date.now(),
        name:name,
        calorie:calorie,
        price:price,
        imagelocation:imagelocation,
        category:category,


    }
    savedatas(data);

}
    }
    catch(error){
console.log(error)
setField(true)
    }
}



  return (
    <div className='Add-cart-full container  mt-5' >
        <div className='add-box   m-auto text-center'>
            <input type='text' placeholder='Food Title' value={name} onChange={(e)=>setName(e.target.value)} />
            {console.log(name) }
            <div className='p-3'>
                <select className='selectoption' onChange={(e)=>setCategory(e.target.value)} value="Select Type" >
                    <option className= 'option' >Select Catagory</option>
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
    <img classname="imagescreen position-absolute" src={imagelocation} alt=""></img>

    <button className='deletebutton bg-danger'onClick={deleteImage} >Delete</button>

    
    
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
                <button className=' save-btn btn btn-success bg-success' onClick={savedata} >Save</button>
            </div>
            
        </div>
       
      
    </div>
  )
}

export default Addcart
