import React, { useContext } from 'react'
import { useState } from 'react'
import './Header.css'
import {HiShoppingCart} from 'react-icons/hi'
import Avatar from '../../Assets/img/avatar.png'
import {ImMenu, ImBoxAdd} from 'react-icons/im'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../../firebase'
import { useStateValue } from '../../redux/StateConttext'
import { actionType } from '../../redux/redux'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

const cart=(
    <div className='cart'>
    <div >
  <HiShoppingCart size={30}/>
  <span>0</span></div>
  
          </div>
  
  
  
  
  )




const Header = () => {
    const[isMenu,setIsMenu]=useState(false)  //menu for show  the menu when switch to mobile
    const firebaseAuth=getAuth(app)     //firebase authication  variable
    const provider=new GoogleAuthProvider()    //google sign in provider
    const[{user},dispatch]=useStateValue()        // pass user and dispatch to useStateValue to perform the login and logout the user  details store in local storage to avoid lose age of data 


    const Login=async()=>{
        if (!user){      //check when no user is login if login this function cannot access
const {user : {refreshToken,providerData}}=await signInWithPopup(firebaseAuth,provider)    // in the providerdata the user details are stored when sigup 
console.log(user)
dispatch({type:actionType.SET_USER,    
    user:providerData[0]})        //In the reducer the user data state will change by using dispatch perform a action .This action returns user details  to reducer store     
localStorage.setItem("user",JSON.stringify(providerData[0]))  //this is for avoid missing  of data when refreshs 
    }
else
{setIsMenu(!isMenu)}}
const logout=()=>{
    setIsMenu(false)
    localStorage.clear()
    dispatch({type:actionType.SET_USER,
        user:null,
})
} //when user logout the menu hook will toggle login or logout. If logout it will go to no user state .The user details  stored in local storage will clear by performing an action  to set to its default state   
  return (
    <div>
        <header className='container-fluid'>

            <div className='full-header container-fluid'>
           <div className='logo'> 
           <h2>Food</h2> <div><h3>Trolly</h3></div>
           
           
           </div>
           <div className='middle-header'>
            <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="menu">Menu</Link></li>
<li><Link to="about" > About us</Link></li>
<li><Link to='service'>Service</Link></li>


                </ul>
                
             </div>
             <div className='right-position'>
             <ul className='right-list'>
                    <li>{cart}</li>
                   <div>
                    <li onClick={Login}>
                        <motion.img whileTap={{scale:0.7}} 
                    src={user ?user.photoURL
                    :Avatar} 
                    className="rounded-circle"
                     alt="image" /></li>
                     {isMenu  &&(<motion.div initial={{scale:0.2,opacity:0.3}}
                     animate={{scale:1,opacity:1}}
                     exit={{scale:0.2,opacity:0.3}}
                        className='user-option-menu text-center'>
                      { user && (user.email==="aswinsureshp66@gmail.com") &&<p className='addNewItem'><Link to="addnewitem">Add item <ImBoxAdd/> </Link></p> }
                      <p className='mobile-menu-mode'>Home</p>
                      <p className='mobile-menu-mode'>Menu</p>
                      <p className='mobile-menu-mode'>About us</p>
                      <p className='mobile-menu-mode'> Service</p>
                        <p  className="logout text-center " onClick={logout}>Logout</p></motion.div>)}</div>
                </ul>
               
             </div>
             <div className='menubar'>
                <ImMenu/>
                </div>
             </div>
        </header>

    </div>
  )
}

export default Header
