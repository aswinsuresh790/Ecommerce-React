
import {getApp,getApps,initializeApp }from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


 const firebaseConfig = {
    apiKey: "AIzaSyCEJNWg2sTS_KC7rBAi_oG4y3QpmMRgTf4",
    authDomain: "foodapp-2ed98.firebaseapp.com",
    projectId: "foodapp-2ed98",
    storageBucket: "foodapp-2ed98.appspot.com",
    messagingSenderId: "121159162914",
    appId: "1:121159162914:web:ea680ed0e6bcc9403a7e7b",
    measurementId: "G-5Y6JK8JBCS"
  };
const app=getApps.Length >0 ? getApp() : initializeApp(firebaseConfig);
const firestore=getFirestore(app)
const storage=getStorage()
export {app,firestore,storage}