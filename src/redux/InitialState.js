import { fetchUser } from "../utils/fetchuser"
const userinfo=fetchUser()
export const InitialState={
    user:userinfo,
    fooditem: null,
    cartshow:false
}