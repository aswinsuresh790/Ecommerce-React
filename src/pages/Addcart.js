import React, { useEffect, useState } from 'react'
import {categories} from '../components/data/data' 
import './Addcart.css'
import I1 from '../Assets/img/i1.png'
import {Storage} from "../firebase/index"
import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { FetchAllData, savedatas } from '../firebase/firestore'
import { useStateValue } from '../redux/StateConttext'
import { actionType } from '../redux/redux'

const Addcart = () => {


    

const[category,setCategory]=useState(null)
const[name,setName]=useState()
const[calorie,setCalorie]=useState("")
const[price ,setPrice]=useState("")
const[imagelocation,setImagelocation]=useState(null)
const[isloding ,setIsloading]=useState(false)
const[msg,setMsg]=useState(null)
const[field,setField]=useState(false)
const[{fooditems},dispatch]=useStateValue()



const uploadFile=(e)=>{
setIsloading(true)
    const uploadfiles=  e.target.files[0]  //choose one image file from computer
console.log(uploadfiles) 
const storageRef=ref(Storage,`image/${Date.now()}-${imagelocation-name}`) //storage refence add and what form it should store in storage (name)
const uploadProgess=uploadBytesResumable(storageRef,uploadfiles) //uploading the image file in storage there are 3 steps
uploadProgess.on("state change",(snapshot)=>{
const uploadresult=(snapshot.bytesTransferred/snapshot.totalBytes) *100  
 
},   //uploading phase the data upload in bytes  by its totalbytes 
(error)=>{
    console.log(error)
},  //error phase if not uploaded the image there will be error or maybe  some other reason due to 
()=>{
    getDownloadURL(uploadProgess.snapshot.ref).then(downloadUrl=>{
        setImagelocation(downloadUrl) 
        //download to webpage from storage  what aailable in storage that show here 

    })
}
)


}
const deleteImage=()=>{
    setIsloading(true)
    const deleteref=ref(Storage,imagelocation) //reference of storage 
    deleteObject(deleteref).then(()=>{ // delete from storeage make image value null 
        setImagelocation(null)
        isloding(false)
    }
     )   
//delete image from storage. All the image stored in storage     

}
const savedata=()=>{
    setIsloading(true)
    try{ 
if(!name && !calorie && !price && !imagelocation){
    console.log("Not possible")
 //in case you are not written of input it alert to mae sure of that
}
else{
          const data={
        id:Date.now(),
        name:name,
        calorie:calorie,
        price: (price),
        imagelocation:imagelocation,
        category:category,


    }   
//In this form data adding to firestore 


    savedatas(data); //this function add data to firestore

}
    }
    catch(error){  
console.log(error)
setField(true)
    }
}
//If not able to  access firestore show some  error

const FetchData=async()=>{
    await FetchAllData().then(data=>{ console.log(data)
   dispatch({
     type:actionType.GET_FOODITEM,
     fooditem:data,
    }    )
   })
   }
   useEffect(()=>{
   FetchData()
   },[])
   




  return (
    <div className='Add-cart-full container  mt-5' >
        <div className='add-box   m-auto text-center'>
            <input type='text' placeholder='Food Title' value={name} onChange={(e)=>setName(e.target.value)} />
            {console.log(name) }     
            {/* title give using hooks */}

            <div className='p-3'>
                <select className='selectoption' onChange={(e)=>setCategory(e.target.value)} value={category} >
                    <option className= 'option' >Select Catagory</option>
                    {categories.map(item=>
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
                <input className='calories-text' type="text"  placeholder='Calories' onChange={(e)=>setCalorie(e.target.value)}  value={calorie}></input>
            </div>     
            <div className='price mt-4 '>
                <input className='price-text' type="text"  placeholder='Price' onChange={(e)=>setPrice(e.target.value)} value={price}  ></input>
            </div>    
            <div className='button-save mt-4'>
                <button className=' save-btn btn btn-success bg-success' onClick={savedata} >Save</button>
            </div>
            
        </div>
       
      
    </div>
  )
}

export default Addcart
