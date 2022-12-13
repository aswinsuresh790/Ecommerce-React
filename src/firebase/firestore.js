import { setDoc,doc, } from "firebase/firestore"
import { firestore} from "./index"

export const savedatas= async(data)=>{
    await setDoc(doc(firestore,"fooditem",`${Date.now()}`),data,{merge: true,})

}