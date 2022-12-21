import { setDoc,doc, getDocs, query, collection, orderBy, } from "firebase/firestore"
import { firestore} from "./index"

export const savedatas= async(data)=>{
    await setDoc(doc(firestore,"fooditem",`${Date.now()}`),data,{merge: true,})
}

export const FetchAllData= async(data)=>{
    const items = await getDocs(
        query(collection(firestore, "fooditem"), orderBy("id", "desc"))
      );
    
      return items.docs.map((doc) => doc.data());
    };